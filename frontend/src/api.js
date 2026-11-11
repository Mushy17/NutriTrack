// Centralized HTTP requests for the NutriTrack API.

export const API_URL =
    import.meta.env.VITE_API_URL ?? "http://localhost:3001";

// Common function for all HTTP requests.
async function request(path, options = {}) {
    const res = await fetch(`${API_URL}${path}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers
        }
    });

    if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
    }

    // Handle responses without a body.
    return res.status === 204 ? null : res.json();
}

// GET - Retrieve all entries.
export function fetchEntries() {
    return request("/entries");
}

// POST - Create a new entry.
export function createEntry(entry) {
    return request("/entries", {
        method: "POST",
        body: JSON.stringify(entry)
    });
}

// PATCH - Update an existing entry.
export function updateEntry(id, changes) {
    return request(`/entries/${id}`, {
        method: "PATCH",
        body: JSON.stringify(changes)
    });
}

// DELETE - Remove an entry.
export function deleteEntry(id) {
    return request(`/entries/${id}`, {
        method: "DELETE"
    });
}