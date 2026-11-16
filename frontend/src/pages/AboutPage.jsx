import { Link } from "react-router-dom";
import styles from "./InfoPages.module.css";

export default function AboutPage() {
    return (
        <section className={`panel ${styles.page}`}>
            <h2>About NutriTrack</h2>

            <p>
                NutriTrack is a web application for tracking daily
                nutrition and physical activities.
            </p>

            <p>
                Users can add meals and activities, manage their
                entries, and explore weekly calorie analytics.
            </p>

            <p>
                The project is developed for the Web Technologies
                course using React, Vite, React Router, and a mock
                REST API powered by JSON Server.
            </p>

            <Link to="/" className={styles.back}>
                Back to Dashboard
            </Link>
        </section>
    );
}
