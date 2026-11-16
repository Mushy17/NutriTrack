import { useState } from "react";
import styles from "./EntryForm.module.css";

const CATEGORIES = {
    Meal: ["Breakfast", "Lunch", "Dinner", "Snack"],
    Activity: ["Cardio", "Strength", "Cycling", "Walking"]
};

export default function EntryForm({ onAdd }) {
    const [name, setName] = useState("");
    const [type, setType] = useState("Meal");
    const [category, setCategory] = useState("Breakfast");
    const [calories, setCalories] = useState("");
    const [error, setError] = useState("");
    const [saving, setSaving] = useState(false);

    function handleTypeChange(event) {
        const nextType = event.target.value;

        setType(nextType);
        setCategory(CATEGORIES[nextType][0]);
    }

    function validate() {
        const trimmedName = name.trim();
        const caloriesValue = Number(calories);

        if (!trimmedName) {
            return "Entry name is required.";
        }

        if (trimmedName.length > 100) {
            return "Entry name must not exceed 100 characters.";
        }

        if (
            calories.trim() === "" ||
            !Number.isInteger(caloriesValue) ||
            caloriesValue <= 0
        ) {
            return "Calories must be a positive whole number.";
        }

        return "";
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (saving) return;

        const validationError = validate();

        if (validationError) {
            setError(validationError);
            return;
        }

        setError("");
        setSaving(true);

        const now = new Date();

        const newEntry = {
            name: name.trim(),
            completed: false,
            type,
            category,
            user: "demo-user",
            calories: Number(calories),
            date: [
                now.getFullYear(),
                String(now.getMonth() + 1).padStart(2, "0"),
                String(now.getDate()).padStart(2, "0")
            ].join("-")
        };

        try {
            await onAdd(newEntry);

            setName("");
            setType("Meal");
            setCategory("Breakfast");
            setCalories("");
        } catch (err) {
            setError(err.message || "Could not save entry.");
        } finally {
            setSaving(false);
        }
    }

    return (
        <section className={`panel ${styles.formPanel}`}>
            <h2>Add New Entry</h2>

            <p className={styles.description}>
                Track a meal or physical activity.
            </p>

            <form
                className={styles.form}
                onSubmit={handleSubmit}
                noValidate
                data-testid="form"
            >
                <label>
                    Entry Name
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="e.g. Chicken and Rice"
                        maxLength={100}
                        aria-invalid={Boolean(error) && !name.trim()}
                        data-testid="form-title"
                    />
                </label>

                <label>
                    Entry Type
                    <select
                        value={type}
                        onChange={handleTypeChange}
                        data-testid="form-type"
                    >
                        <option value="Meal">Meal</option>
                        <option value="Activity">Activity</option>
                    </select>
                </label>

                <label>
                    Category
                    <select
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                        data-testid="form-category"
                    >
                        {CATEGORIES[type].map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    Calories
                    <input
                        type="number"
                        min="1"
                        step="1"
                        value={calories}
                        onChange={(event) => setCalories(event.target.value)}
                        aria-invalid={
                            Boolean(error) &&
                            (
                                calories.trim() === "" ||
                                !Number.isInteger(Number(calories)) ||
                                Number(calories) <= 0
                            )
                        }
                        data-testid="form-calories"
                    />
                </label>

                {error && (
                    <p
                        className={styles.formError}
                        role="alert"
                        data-testid="form-error"
                    >
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    className={styles.addButton}
                    disabled={saving}
                    data-testid="form-submit"
                >
                    {saving ? "Saving..." : "+ Add Entry"}
                </button>
            </form>
        </section>
    );
}
