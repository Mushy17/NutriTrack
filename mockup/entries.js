const ENTRY_TYPES = ["Meal", "Activity"];

const entries = [
    {
        id: 1,
        name: "Greek Yogurt Breakfast",
        completed: true,
        type: "Meal",
        category: "Breakfast",
        user: "demo-user",
        calories: 420,
        date: "2026-10-06"
    },
    {
        id: 2,
        name: "Morning Run",
        completed: false,
        type: "Activity",
        category: "Cardio",
        user: "demo-user",
        calories: 320,
        date: "2026-10-06"
    },
    {
        id: 3,
        name: "Vegetable Pasta Lunch",
        completed: false,
        type: "Meal",
        category: "Lunch",
        user: "demo-user",
        calories: 650,
        date: "2026-10-06"
    }
];

function listNames(list) {
    return list.map((entry) => entry.name);
}

function countActive(list) {
    return list.filter((entry) => !entry.completed).length;
}

function searchByName(list, text) {
    const searchText = text.toLowerCase();

    return list.filter((entry) =>
        entry.name.toLowerCase().includes(searchText)
    );
}

function findById(list, id) {
    return list.find((entry) => entry.id === id);
}

function nextId(list) {
    return list.reduce(
        (max, entry) => Math.max(max, entry.id),
        0
    ) + 1;
}

function addEntry(
    list,
    name,
    type = "Meal",
    category = "Other",
    user = "demo-user",
    calories = 0,
    date = "2026-10-06"
) {
    const cleanName = name.trim();

    if (cleanName === "") {
        console.log("Eroare: numele nu poate lipsi.");
        return list;
    }

    if (!ENTRY_TYPES.includes(type)) {
        console.log("Eroare: tipul inregistrarii nu este valid.");
        return list;
    }

    if (calories < 0) {
        console.log("Eroare: numarul de calorii nu poate fi negativ.");
        return list;
    }

    const newEntry = {
        id: nextId(list),
        name: cleanName,
        completed: false,
        type: type,
        category: category,
        user: user,
        calories: calories,
        date: date
    };

    return [...list, newEntry];
}

function toggleCompleted(list, id) {
    return list.map((entry) =>
        entry.id === id
            ? { ...entry, completed: !entry.completed }
            : entry
    );
}

function deleteEntry(list, id) {
    return list.filter((entry) => entry.id !== id);
}

///Teste in consola

console.log("--- Reading ---");

console.log("Names:", listNames(entries).join(", "));
console.log("Active:", countActive(entries));
console.log("Entry with id 2:", findById(entries, 2).name);
console.log(
    "Search 'run':",
    listNames(searchByName(entries, "run")).join(", ")
);


console.log("--- Adding ---");

let list = addEntry(
    entries,
    "Evening Walk",
    "Activity",
    "Cardio",
    "demo-user",
    180,
    "2026-10-06"
);

console.log("New list:", list.length, "entries");
console.log("Original list still has:", entries.length, "entries");
console.log("New entry:", list[list.length - 1]);


console.log("--- Updating and deleting ---");

list = toggleCompleted(list, 2);

console.log(
    "After toggling id 2, active:",
    countActive(list)
);

list = deleteEntry(list, 3);

console.log(
    "After deleting id 3:",
    listNames(list).join(", ")
);


console.log("--- Validation ---");

addEntry(list, " ");
addEntry(list, "Test Entry", "InvalidType");

