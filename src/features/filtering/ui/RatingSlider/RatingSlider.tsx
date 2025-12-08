import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";
import styles from "./RatingSlider.module.css";

interface Props {
    rating: [number, number];
    onChange: (value: [number, number]) => void;
}

export const RatingSlider = ({ rating, onChange }: Props) => {
    const [localValue, setLocalValue] = useState<[number, number]>(rating);


    useEffect(() => {
        setLocalValue(rating);
    }, [rating]);

    const handleChange = (_: Event, value: number | number[]) => {
        if (Array.isArray(value)) {
            setLocalValue([value[0], value[1]]);
        }
    };


    useEffect(() => {
        const id = setTimeout(() => {
            onChange(localValue);
        }, 200);

        return () => clearTimeout(id);
    }, [localValue]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.label}>
                Rating: <span>{localValue[0].toFixed(1)}</span> –{" "}
                <span>{localValue[1].toFixed(1)}</span>
            </div>

            <Slider
                value={localValue}
                onChange={handleChange}
                min={0}
                max={10}
                step={0.1}
                valueLabelDisplay="auto"
                className={styles.slider}
            />
        </div>
    );
};
