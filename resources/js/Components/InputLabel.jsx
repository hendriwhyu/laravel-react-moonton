export default function InputLabel({
    forInput,
    value,
    className = "",
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={`block font-medium text-sm ` + className}
        >
            {value ? value : children}
        </label>
    );
}
