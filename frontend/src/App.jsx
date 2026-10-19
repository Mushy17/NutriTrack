import EntryList from "./components/EntryList.jsx";

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

function App() {
  const totalEntries = entries.length;

  const activeEntries = entries.filter(
      (entry) => !entry.completed
  ).length;

  const caloriesConsumed = entries
      .filter((entry) => entry.type === "Meal")
      .reduce((total, entry) => total + entry.calories, 0);

  const caloriesBurned = entries
      .filter((entry) => entry.type === "Activity")
      .reduce((total, entry) => total + entry.calories, 0);

  return (
      <>
        <header className="app-header">
          <div className="header-content">
            <div className="brand">
              <div className="brand-icon">N</div>
              <div>
                <h1>NutriTrack</h1>
                <p>Nutrition & Activity Tracker</p>
              </div>
            </div>

            <div className="user-profile">
              <span>demo-user</span>
            </div>
          </div>
        </header>

        <main className="dashboard">
          <section className="welcome-section">
            <h2>Welcome back!</h2>
            <p>
              Track your nutrition and physical activity
              in one place.
            </p>
          </section>

          <section className="overview-section">
            <div className="summary-card">
              <p>Calories Consumed</p>
              <h3>{caloriesConsumed} kcal</h3>
            </div>

            <div className="summary-card">
              <p>Calories Burned</p>
              <h3>{caloriesBurned} kcal</h3>
            </div>

            <div className="summary-card">
              <p>Total Entries</p>
              <h3>{totalEntries}</h3>
            </div>

            <div className="summary-card">
              <p>Active Entries</p>
              <h3>{activeEntries}</h3>
            </div>
          </section>


          <section className="panel entries-panel">
            <div className="entries-header">
              <div>
                <p className="section-label">TODAY</p>
                <h2>Today's entries</h2>
              </div>

              <span className="entries-count">
      {totalEntries} entries · {activeEntries} active
    </span>
            </div>

            <EntryList entries={entries} />
          </section>

        </main>
      </>
  );

}


export default App;

