import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function navClass({ isActive }) {
    return isActive
        ? `${styles.navLink} ${styles.active}`
        : styles.navLink;
}

export default function Layout() {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <div className={styles.brand}>
                        <span className={styles.brandIcon}>N</span>
                        <div>
                            <h1>NutriTrack</h1>
                            <p>Nutrition &amp; Activity Tracker</p>
                        </div>
                    </div>

                    <nav className={styles.nav} data-testid="nav">
                        <NavLink to="/" end className={navClass}>
                            Dashboard
                        </NavLink>

                        <NavLink to="/about" className={navClass}>
                            About
                        </NavLink>
                    </nav>
                </div>
            </header>

            <main className={styles.main}>
                <Outlet />
            </main>

            <footer className={styles.footer}>
                NutriTrack · Web Technologies Project
            </footer>
        </div>
    );
}
