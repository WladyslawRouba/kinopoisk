import styles from "./ThemeSwitch.module.css";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { toggleTheme, selectTheme } from "@/app/appSlice";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import LightModeIcon from "@mui/icons-material/LightMode";

export const ThemeSwitch = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector(selectTheme);

    const onToggle = () => dispatch(toggleTheme());

    return (
        <button
            className={styles.switch}
            onClick={onToggle}
            aria-label="Toggle theme"
        >
            <div className={`${styles.iconWrapper} ${theme === "dark" ? styles.dark : styles.light}`}>
                {theme === "dark" ? (
                    <Brightness4Icon className={styles.icon} />
                ) : (
                    <LightModeIcon className={styles.icon} />
                )}
            </div>
        </button>
    );
};
