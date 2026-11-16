import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchEntry } from "../api.js";
import styles from "./EntryDetailPage.module.css";

export default function EntryDetailPage() {
    const { id } = useParams();
    const [entry, setEntry] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;

        fetchEntry(id)
            .then((data) => {
                if (!ignore) {
                    setEntry(data);
                    setError(null);
                }
            })
            .catch((err) => {
                if (!ignore) {
                    setError(err.message);
                }
            });

        return () => {
            ignore = true;
        };
    }, [id]);

    if (error) {
        return (
            <section className={`panel ${styles.detail}`}>
                <p className="error" data-testid="error">
                    Could not load entry: {error}
                </p>
                <Link to="/" className={styles.back}>
                    Back to Dashboard
                </Link>
            </section>
        );
    }

    if (!entry || String(entry.id) !== id) {
        return (
            <p className="info" data-testid="loading">
                Loading entry...
            </p>
        );
    }

    return (
        <section
            className={`panel ${styles.detail}`}
            data-testid="detail"
        >
            <Link to="/" className={styles.back}>
                Back to Dashboard
            </Link>

            <h2
                className={entry.completed ? styles.done : ""}
                data-testid="detail-title"
            >
                {entry.name}
            </h2>

            <dl className={styles.fields}>
                <dt>Type</dt>
                <dd>{entry.type}</dd>

                <dt>Category</dt>
                <dd>{entry.category}</dd>

                <dt>Calories</dt>
                <dd>
                    {entry.calories} kcal
                    {entry.type === "Activity" ? " burned" : ""}
                </dd>

                <dt>Status</dt>
                <dd>{entry.completed ? "Completed" : "Active"}</dd>

                <dt>Date</dt>
                <dd>{entry.date}</dd>

                <dt>User</dt>
                <dd>{entry.user}</dd>

                <dt>Entry ID</dt>
                <dd>{entry.id}</dd>
            </dl>
        </section>
    );
}
