
import { Link } from "react-router-dom";
import styles from "./HowToUsePage.module.css";

const steps = [
    {
        title: "Plan Your Day",
        description:
            "Start your day by adding the meals you plan to eat and the physical activities you want to complete."
    },
    {
        title: "Add Your Meals",
        description:
            "Select Meal, enter the food name, choose a category such as Breakfast, Lunch or Dinner, and add the estimated calories."
    },
    {
        title: "Add Your Activities",
        description:
            "Select Activity, enter the activity name, choose its category and add the estimated calories burned."
    },
    {
        title: "Complete Your Entries",
        description:
            "As you go through your day, check the box next to each meal or activity you have completed. Unfinished entries remain active."
    },
    {
        title: "Monitor Your Insights",
        description:
            "Use NutriTrack Insights to compare calories consumed and burned throughout the week. Navigate between weeks to review your progress."
    },
    {
        title: "Manage Your Entries",
        description:
            "Click an entry name to see its details. You can also delete entries that are no longer needed."
    }
];

export default function HowToUsePage() {
    return (
        <section className={`panel ${styles.page}`}>
            <div className={styles.header}>
                <span className={styles.eyebrow}>
                    GETTING STARTED
                </span>

                <h2>How to Use NutriTrack</h2>

                <p>
                    Plan your meals, organize your workouts,
                    and track your daily progress in one place.
                </p>
            </div>

            <div className={styles.steps}>
                {steps.map((step, index) => (
                    <article
                        key={step.title}
                        className={styles.step}
                    >
                        <span className={styles.number}>
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    </article>
                ))}
            </div>

            <div className={styles.footer}>
                <h3>Ready to get started?</h3>

                <p>
                    Head to your dashboard and start planning
                    today's meals and activities.
                </p>

                <Link to="/" className={styles.button}>
                    Go to Dashboard
                </Link>
            </div>
        </section>
    );
}
