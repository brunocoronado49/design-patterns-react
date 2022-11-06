export const Todo = ({ title, completed }) => {
    function handleChange() {}

    return (
        <div>
            <input
                type="checkbox"
                checked={completed}
                onChange={handleChange}
            />
            {title}
        </div>
    );
};
