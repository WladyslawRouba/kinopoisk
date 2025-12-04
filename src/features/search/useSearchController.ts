import { useState } from "react";

export const useSearchController = (initialValue: string = "") => {
    const [value, setValue] = useState(initialValue);

    const onChange = (newValue: string) => {
        setValue(newValue);
    };

    const onSearch = () => {};

    return { value, onChange, onSearch };
};
