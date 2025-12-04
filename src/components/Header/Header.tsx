import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { ThemeSwitch } from "@/components/ThemeSwitch/ThemeSwitch.tsx";



export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>

                <div className={styles.logoBlock}>
                    <NavLink to="/">
                        <img
                            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                            alt="TMDB Logo"
                            className={styles.logo}
                        />
                    </NavLink>
                </div>

                <nav className={styles.nav}>
                    <NavLink to="/" className={({ isActive }) =>
                        isActive ? `${styles.link} ${styles.active}` : styles.link
                    }>
                        Main
                    </NavLink>

                    <span className={styles.divider}>|</span>

                    <NavLink to="/category/popular" className={({ isActive }) =>
                        isActive ? `${styles.link} ${styles.active}` : styles.link
                    }>
                        Category movies
                    </NavLink>

                    <span className={styles.divider}>|</span>

                    <NavLink to="/filtered" className={({ isActive }) =>
                        isActive ? `${styles.link} ${styles.active}` : styles.link
                    }>
                        Filtered movies
                    </NavLink>

                    <span className={styles.divider}>|</span>

                    <NavLink to="/search" className={({ isActive }) =>
                        isActive ? `${styles.link} ${styles.active}` : styles.link
                    }>
                        Search
                    </NavLink>

                    <span className={styles.divider}>|</span>

                    <NavLink to="/favorites" className={({ isActive }) =>
                        isActive ? `${styles.link} ${styles.active}` : styles.link
                    }>
                        Favorites
                    </NavLink>
                </nav>

                <ThemeSwitch />
            </div>
        </header>
    );
};
