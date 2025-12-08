import { useNavigate } from "react-router-dom";
import { CATEGORIES, type CategoryKey } from "@/pages/CategoryPage/model/categoriesMap.ts";
import styles from "./CategoryTabs.module.css";

interface Props {
    active: CategoryKey;
    onResetPage: () => void;
}

export const CategoryTabs = ({ active, onResetPage }: Props) => {
    const navigate = useNavigate();

    return (
        <div className={styles.buttons}>
            {Object.entries(CATEGORIES).map(([key, label]) => {
                const category = key as CategoryKey;

                return (
                    <button
                        key={category}
                        className={`${styles.categoryBtn} ${
                            active === category ? styles.active : ""
                        }`}
                        onClick={() => {
                            navigate(`/category/${category}`);
                            onResetPage();
                        }}
                    >
                        {label}
                    </button>
                );
            })}
        </div>
    );
};
