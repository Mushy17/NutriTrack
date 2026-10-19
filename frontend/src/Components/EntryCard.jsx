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

export default function EntryCard({ entry }) {
    const typeDetails = TYPE_DETAILS[entry.type];

    const caloriesText = entry.type === "Activity"
        ? `${entry.calories} kcal burned`
        : `${entry.calories} kcal`;

    return (
        <li className={`item-card${entry.completed ? " done" : ""}`}>
            <div className="entry-main">
                <div className={`entry-symbol ${typeDetails.symbolClass}`}>
                    {typeDetails.symbol}
                </div>

                <div className="entry-content">
                    <div className="entry-title-row">
                        <h3>{entry.name}</h3>

                        <span className={`badge ${typeDetails.badgeClass}`}>
              {typeDetails.label}
            </span>
                    </div>

                    <p className="item-details">
                        {entry.category} · {caloriesText}
                    </p>
                </div>
            </div>

            <div className={`entry-status ${
                entry.completed ? "completed-status" : "active-status"
            }`}>
                <span className="status-dot" aria-hidden="true"></span>
                {entry.completed ? "Completed" : "Active"}
            </div>
        </li>
    );
}
