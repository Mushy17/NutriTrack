
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

import EntryForm from "./Components/EntryForm.jsx";
import EntryList from "./Components/EntryList.jsx";
import {
  createEntry,
  deleteEntry,
  fetchEntries,
  updateEntry
} from "./api.js";

function getInitialTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
}

function formatLocalDate(date) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0")
  ].join("-");
}

function App() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [theme, setTheme] = useState(getInitialTheme);
  const [weekOffset, setWeekOffset] = useState(0);

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


  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);


  async function handleToggle(id) {
    const entry = entries.find((item) => item.id === id);

    if (!entry) return;

    try {
      setError(null);

      const updatedEntry = await updateEntry(id, {
        completed: !entry.completed
      });

      setEntries((previous) =>
          previous.map((item) =>
              item.id === id ? updatedEntry : item
          )
      );
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      setError(null);

      await deleteEntry(id);

      setEntries((previous) =>
          previous.filter((entry) => entry.id !== id)
      );
    } catch (err) {
      setError(err.message);
    }
  }


  async function handleAddEntry(entry) {
    const savedEntry = await createEntry(entry);

    setEntries((previous) => [...previous, savedEntry]);
    setWeekOffset(0);
  }


  const totalEntries = entries.length;

  const activeEntries = entries.filter(
      (entry) => !entry.completed
  ).length;

  const caloriesConsumed = entries
      .filter((entry) => entry.type === "Meal")
      .reduce((sum, entry) => sum + entry.calories, 0);

  const caloriesBurned = entries
      .filter((entry) => entry.type === "Activity")
      .reduce((sum, entry) => sum + entry.calories, 0);


  const endOfPeriod = new Date();
  endOfPeriod.setHours(12, 0, 0, 0);
  endOfPeriod.setDate(endOfPeriod.getDate() + weekOffset * 7);

  const weeklyData = Array.from({ length: 7 }, (_, index) => {
    const dayDate = new Date(endOfPeriod);
    dayDate.setDate(dayDate.getDate() - (6 - index));

    const date = formatLocalDate(dayDate);

    const dailyEntries = entries.filter(
        (entry) => entry.date === date
    );

    return {
      date,
      day: dayDate.toLocaleDateString("en-US", {
        weekday: "short"
      }),
      consumed: dailyEntries
          .filter((entry) => entry.type === "Meal")
          .reduce((sum, entry) => sum + entry.calories, 0),
      burned: dailyEntries
          .filter((entry) => entry.type === "Activity")
          .reduce((sum, entry) => sum + entry.calories, 0)
    };
  });

  const selectedDates = new Set(
      weeklyData.map((day) => day.date)
  );

  const periodEntries = entries.filter(
      (entry) => selectedDates.has(entry.date)
  );

  const periodMeals = periodEntries.filter(
      (entry) => entry.type === "Meal"
  ).length;

  const periodActivities = periodEntries.filter(
      (entry) => entry.type === "Activity"
  ).length;

  const periodNetCalories = weeklyData.reduce(
      (sum, day) => sum + day.consumed - day.burned,
      0
  );

  return (
      <>
        <header className="app-header">
          <div className="header-content">
            <div className="brand">
              <div className="brand-icon">N</div>

              <div>
                <h1>NutriTrack</h1>
                <p>Nutrition &amp; Activity Tracker</p>
              </div>
            </div>

            <div className="user-profile">
              <button
                  type="button"
                  className="theme-toggle"
                  onClick={() =>
                      setTheme((current) =>
                          current === "dark" ? "light" : "dark"
                      )
                  }
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
              Track your nutrition and physical activity in one place.
            </p>
          </section>

          <section
              className="overview-section"
              aria-label="Dashboard statistics"
          >
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

          <section className="panel insights-panel">
            <div className="insights-header">
              <div>
                <p className="section-label">ANALYTICS</p>
                <h2>NutriTrack Insights</h2>

                <p className="insights-description">
                  Nutrition and activity for the selected 7-day period.
                </p>
              </div>

              <div className="insights-week-controls">
                <button
                    type="button"
                    onClick={() =>
                        setWeekOffset((previous) => previous - 1)
                    }
                    aria-label="Previous 7 days"
                >
                  ←
                </button>

                <span className="insights-period">
                {weeklyData[0].date} – {weeklyData[6].date}
              </span>

                <button
                    type="button"
                    onClick={() =>
                        setWeekOffset((previous) => previous + 1)
                    }
                    disabled={weekOffset >= 0}
                    aria-label="Next 7 days"
                >
                  →
                </button>
              </div>
            </div>

            <div className="insights-stats">
              <div className="insights-stat">
                <span>Total Meals</span>
                <strong>{periodMeals}</strong>
              </div>

              <div className="insights-stat">
                <span>Total Activities</span>
                <strong>{periodActivities}</strong>
              </div>

              <div className="insights-stat">
                <span>Net Calories</span>
                <strong>{periodNetCalories} kcal</strong>
              </div>
            </div>

            <div className="insights-chart">
              <h3>Calorie Overview</h3>

              <ResponsiveContainer width="100%" height={230}>
                <BarChart
                    data={weeklyData}
                    margin={{
                      top: 10,
                      right: 10,
                      left: -15,
                      bottom: 0
                    }}
                >
                  <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="var(--border)"
                  />

                  <XAxis
                      dataKey="day"
                      tick={{
                        fill: "var(--muted)",
                        fontSize: 12
                      }}
                      axisLine={false}
                      tickLine={false}
                  />

                  <YAxis
                      tick={{
                        fill: "var(--muted)",
                        fontSize: 12
                      }}
                      axisLine={false}
                      tickLine={false}
                  />

                  <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--surface)",
                        border: "1px solid var(--border)",
                        borderRadius: "10px",
                        color: "var(--text)"
                      }}
                      formatter={(value) => `${value} kcal`}
                  />

                  <Bar
                      dataKey="consumed"
                      name="Consumed"
                      fill="#65c99a"
                      radius={[5, 5, 0, 0]}
                  />

                  <Bar
                      dataKey="burned"
                      name="Burned"
                      fill="#f2ab77"
                      radius={[5, 5, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>

              <div className="insights-legend">
              <span>
                <i
                    className="legend-consumed"
                    aria-hidden="true"
                />
                Calories Consumed
              </span>

                <span>
                <i
                    className="legend-burned"
                    aria-hidden="true"
                />
                Calories Burned
              </span>
              </div>
            </div>
          </section>

          <EntryForm onAdd={handleAddEntry} />

          <section className="panel entries-panel">
            <div className="entries-header">
              <div>
                <p className="section-label">ENTRIES</p>
                <h2>Today's entries</h2>
              </div>

              <span className="entries-count">
              {totalEntries} entries · {activeEntries} active
            </span>
            </div>

            {loading && (
                <p className="info" data-testid="loading">
                  Loading entries...
                </p>
            )}

            {error && (
                <p
                    className="error"
                    role="alert"
                    data-testid="error"
                >
                  Could not load entries: {error}. Please check that
                  the API is running using{" "}
                  <code>npm run api</code>.
                </p>
            )}

            {!loading && (
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
