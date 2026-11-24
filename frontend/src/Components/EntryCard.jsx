import { Link } from "react-router-dom";
import styles from "./EntryCard.module.css";

const TYPE_DETAILS = {
    Meal: {
        label: "Meal",
        symbol: "M",
        symbolClass: "meal-symbol",
        badgeClass: "badge-meal"
    },
    Activity: {
        label: "Activity",
        symbol: "A",
        symbolClass: "activity-symbol",
        badgeClass: "badge-activity"
    }
};

export default function EntryCard({ entry, onToggle, onDelete }) {
    const typeDetails = TYPE_DETAILS[entry.type];

    const caloriesText = entry.type === "Activity"
        ? `${entry.calories} kcal burned`
        : `${entry.calories} kcal`;

    return (
        <li
            className={`${styles["item-card"]} ${
                entry.completed ? styles.done : ""
            }`}
            data-testid="item"
            data-id={entry.id}
        >
            <div className={styles["entry-main"]}>
                <input
                    id={`entry-checkbox-${entry.id}`}
                    className={styles["entry-checkbox"]}
                    type="checkbox"
                    checked={entry.completed}
                    onChange={() => onToggle(entry.id)}
                    aria-label={`Toggle ${entry.name}`}
                    data-testid="item-toggle"
                />

                <div
                    className={`${styles["entry-symbol"]} ${
                        styles[typeDetails.symbolClass]
                    }`}
                >
                    {typeDetails.symbol}
                </div>

                <div className={styles["entry-content"]}>
                    <div className={styles["entry-title-row"]}>
                        <h3>
                            <Link
                                to={`/entries/${entry.id}`}
                                className={styles["entry-title-link"]}
                                data-testid="item-link"
                            >
                                {entry.name}
                            </Link>
                        </h3>

                        <span
                            className={`${styles.badge} ${
                                styles[typeDetails.badgeClass]
                            }`}
                        >
                            {typeDetails.label}
                        </span>
                    </div>

                    <p className={styles["item-details"]}>
                        {entry.category} · {caloriesText}
                    </p>
                </div>
            </div>

            <div className={styles["entry-actions"]}>
                <div
                    className={`${styles["entry-status"]} ${
                        entry.completed
                            ? styles["completed-status"]
                            : styles["active-status"]
                    }`}
                >
                    <span
                        className={styles["status-dot"]}
                        aria-hidden="true"
                    ></span>

                    {entry.completed ? "Completed" : "Active"}
                </div>

                <button
                    type="button"
                    className={styles["delete-button"]}
                    onClick={() => onDelete(entry.id)}
                    aria-label={`Delete ${entry.name}`}
                    data-testid="item-delete"
                >
                    Delete
                </button>
            </div>
        </li>
    );
}
