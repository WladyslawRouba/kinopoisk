import styles from "./NotFoundPage.module.css";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.code}>404</h1>
            <p className={styles.text}>Page not found</p>

            <button className={styles.btn} onClick={() => navigate("/")}>
                Go to Home
            </button>
        </div>
    );
};
