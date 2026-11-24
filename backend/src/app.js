import express from "express";
import cors from "cors";
import entriesRouter from "./routes/entries.js";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173"
}));

app.use(express.json());

app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

app.use("/entries", entriesRouter);

app.use((req, res) => {
    res.status(404).json({ error: "Route not found." });
});

app.use((err, req, res, next) => {
    console.error(err);

    const status = err.status || 500;

    res.status(status).json({
        error: status === 500 ? "Internal server error." : err.message
    });
});

export default app;
