import { useState } from "react";

export const withSearch = (Component, dataset) => {
    return function () {
        const [query, setQuery] = useState("");

        function handleChange(evt) {
            setQuery(evt.target.value);
        }

        return (
            <div>
                <input value={query} onChange={handleChange} />
                <Component query={query} dataset={dataset} />
            </div>
        );
    };
};
