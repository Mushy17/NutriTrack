import EntryCard from "./EntryCard.jsx";
import styles from "./EntryList.module.css";

export default function EntryList({ entries, onToggle, onDelete }) {
    if (entries.length === 0) {
        return (
            <p className={styles.empty} data-testid="empty">
                No entries available.
            </p>
        );
    }

    return (
        <ul className={styles.list}>
            {entries.map((entry) => (
                <EntryCard
                    key={entry.id}
                    entry={entry}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}
