export const API_URL =
    import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export async function fetchEntries() {
    const res = await fetch(`${API_URL}/entries`);

    if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
    }

    return res.json();
}