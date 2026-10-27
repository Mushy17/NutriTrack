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
        <li className={`item-card${entry.completed ? " done" : ""}`}>

            <div className="entry-main">

                <input
                    id={`entry-checkbox-${entry.id}`}
                    className="entry-checkbox"
                    type="checkbox"
                    checked={entry.completed}
                    onChange={() => onToggle(entry.id)}
                />

                <div className={`entry-symbol ${typeDetails.symbolClass}`}>
                    {typeDetails.symbol}
                </div>

                <div className="entry-content">

                    <div className="entry-title-row">
                        <h3>
                            <label htmlFor={`entry-checkbox-${entry.id}`}>
                                {entry.name}
                            </label>
                        </h3>

                        <span className={`badge ${typeDetails.badgeClass}`}>
              {typeDetails.label}
            </span>
                    </div>

                    <p className="item-details">
                        {entry.category} · {caloriesText}
                    </p>

                </div>
            </div>

            <div className="entry-actions">

                <div className={`entry-status ${
                    entry.completed ? "completed-status" : "active-status"
                }`}>
                    <span className="status-dot" aria-hidden="true"></span>
                    {entry.completed ? "Completed" : "Active"}
                </div>

                <button
                    type="button"
                    className="delete-button"
                    onClick={() => onDelete(entry.id)}
                    aria-label={`Delete ${entry.name}`}
                >
                    Delete
                </button>

            </div>

        </li>
    );
}