export default function Checkbox({
    className = "",
    name,
    onChange,
    checked = false,
}) {
    return (
        <input
            name={name}
            type="checkbox"
            className={
                "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 " +
                className
            }
            onChange={(e) => onChange(e)}
            defaultChecked={checked}
        />
    );
}
