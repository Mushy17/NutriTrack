import EntryCard from "./EntryCard.jsx";

export default function EntryList({ entries }) {
    if (entries.length === 0) {
        return (
            <p className="empty-list">
                No entries available.
            </p>
        );
    }

    return (
        <ul className="item-list">
            {entries.map((entry) => (
                <EntryCard
                    key={entry.id}
                    entry={entry}
                />
            ))}
        </ul>
    );
}
