import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaTelegram, FaInstagram } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.text}>
                    © 2025 Kinopoisk Demo · Data courtesy of TMDB
                </p>
    
                <div className={styles.socials}>
                    <a
                        href="https://github.com/WladyslawRouba"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.icon}
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.icon}
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://t.me/"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.icon}
                    >
                        <FaTelegram />
                    </a>

                    <a
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.icon}
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </footer>
    );
};
