
import { Router } from "express";
import { parseId, validateEntry } from "../validation.js";

const router = Router();

let entries = [
    {
        id: 1,
        name: "Greek Yogurt Breakfast",
        completed: true,
        type: "Meal",
        category: "Breakfast",
        user: "demo-user",
        calories: 420,
        date: "2026-11-24"
    },
    {
        id: 2,
        name: "Morning Run",
        completed: false,
        type: "Activity",
        category: "Cardio",
        user: "demo-user",
        calories: 320,
        date: "2026-11-24"
    },
    {
        id: 3,
        name: "Vegetable Pasta Lunch",
        completed: false,
        type: "Meal",
        category: "Lunch",
        user: "demo-user",
        calories: 560,
        date: "2026-11-24"
    }
];

let nextId = 4;

function findEntryIndex(req, res) {
    const id = parseId(req.params.id);

    if (!id) {
        res.status(400).json({ error: "Invalid entry ID." });
        return -1;
    }

    const index = entries.findIndex((entry) => entry.id === id);

    if (index === -1) {
        res.status(404).json({ error: "Entry not found." });
    }

    return index;
}

router.get("/", (req, res) => {
    res.json(entries);
});

router.get("/:id", (req, res) => {
    const index = findEntryIndex(req, res);
    if (index === -1) return;

    res.json(entries[index]);
});

router.post("/", (req, res) => {
    const { errors, data } = validateEntry(req.body ?? {});

    if (errors.length > 0) {
        return res.status(400).json({ error: errors.join("; ") });
    }

    const entry = { id: nextId++, ...data };
    entries.push(entry);

    res.status(201).json(entry);
});

router.patch("/:id", (req, res) => {
    const index = findEntryIndex(req, res);
    if (index === -1) return;

    const { errors, data } = validateEntry(req.body ?? {}, {
        partial: true
    });

    if (errors.length > 0) {
        return res.status(400).json({ error: errors.join("; ") });
    }

    entries[index] = { ...entries[index], ...data };

    res.json(entries[index]);
});

router.delete("/:id", (req, res) => {
    const index = findEntryIndex(req, res);
    if (index === -1) return;

    entries.splice(index, 1);

    res.status(204).end();
});

export default router;
