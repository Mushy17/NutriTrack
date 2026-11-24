export const ENTRY_TYPES = ["Meal", "Activity"];

export const ENTRY_CATEGORIES = {
    Meal: ["Breakfast", "Lunch", "Dinner", "Snack"],
    Activity: ["Cardio", "Strength", "Flexibility", "Other"]
};

export function parseId(value) {
    const id = Number(value);
    return Number.isInteger(id) && id > 0 ? id : null;
}

export function validateEntry(body, { partial = false } = {}) {
    const errors = [];
    const data = {};

    if (typeof body !== "object" || body === null || Array.isArray(body)) {
        return {
            errors: ["Entry data must be an object."],
            data
        };
    }

    if (!partial || body.name !== undefined) {
        if (typeof body.name !== "string" || body.name.trim() === "") {
            errors.push("Entry name is required.");
        } else if (body.name.trim().length > 100) {
            errors.push("Entry name must not exceed 100 characters.");
        } else {
            data.name = body.name.trim();
        }
    }

    if (!partial || body.type !== undefined) {
        if (!ENTRY_TYPES.includes(body.type)) {
            errors.push("Invalid entry type.");
        } else {
            data.type = body.type;
        }
    }

    if (!partial || body.category !== undefined) {
        if (typeof body.category !== "string" || body.category.trim() === "") {
            errors.push("Category is required.");
        } else {
            data.category = body.category.trim();
        }
    }

    if (!partial || body.calories !== undefined) {
        if (
            typeof body.calories !== "number" ||
            !Number.isInteger(body.calories) ||
            body.calories <= 0
        ) {
            errors.push("Calories must be a positive whole number.");
        } else {
            data.calories = body.calories;
        }
    }

    if (body.completed !== undefined) {
        if (typeof body.completed !== "boolean") {
            errors.push("Completed must be true or false.");
        } else {
            data.completed = body.completed;
        }
    } else if (!partial) {
        data.completed = false;
    }

    if (body.user !== undefined) {
        if (typeof body.user !== "string" || body.user.trim() === "") {
            errors.push("Invalid user.");
        } else {
            data.user = body.user.trim();
        }
    } else if (!partial) {
        data.user = "demo-user";
    }

    if (body.date !== undefined) {
        if (typeof body.date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(body.date)) {
            errors.push("Date must use YYYY-MM-DD format.");
        } else {
            data.date = body.date;
        }
    } else if (!partial) {
        data.date = new Date().toISOString().slice(0, 10);
    }

    return { errors, data };
}
