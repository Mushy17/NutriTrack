import { useEffect, useState } from "react";
import EntryList from "./Components/EntryList.jsx";
import { fetchEntries } from "./api.js";


function getInitialTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
}

function App() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    let ignore = false;

    async function loadEntries() {
      try {
        const data = await fetchEntries();

        if (!ignore) {
          setEntries(data);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadEntries();

    return () => {
      ignore = true;
    };
  }, []);

  function handleToggle(id) {
    setEntries((prev) =>
        prev.map((entry) =>
            entry.id === id
                ? { ...entry, completed: !entry.completed }
                : entry
        )
    );
  }

  function handleDelete(id) {
    setEntries((prev) =>
        prev.filter((entry) => entry.id !== id)
    );
  }

  function handleThemeToggle() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }

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
              <button
                  type="button"
                  className="theme-toggle"
                  onClick={handleThemeToggle}
                  aria-pressed={theme === "dark"}
              >
                {theme === "dark" ? "Light mode" : "Dark mode"}
              </button>

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

            {loading && (
                <p className="info">
                  Loading entries...
                </p>
            )}

            {error && (
                <p className="error">
                  Could not load entries: {error}.
                  Please check that the API is running using{" "}
                  <code>npm run api</code>.
                </p>
            )}

            {!loading && !error && (
                <EntryList
                    entries={entries}
                    onToggle={handleToggle}
                    onDelete={handleDelete}
                />
            )}
          </section>

        </main>
      </>
  );

}


export default App;

