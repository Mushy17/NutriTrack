import { Link } from "react-router-dom";
import styles from "./InfoPages.module.css";

export default function NotFoundPage() {
    return (
        <section
            className={`panel ${styles.page}`}
            data-testid="not-found"
        >
            <h2>404 – Page Not Found</h2>

            <p>
                The page you are looking for does not exist.
            </p>

            <Link to="/" className={styles.back}>
                Back to Dashboard
            </Link>
        </section>
    );
}
