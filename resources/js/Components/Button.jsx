import propTypes from "prop-types";

Button.propTypes = {
    type: propTypes.oneOf(["button", "submit", "reset"]),
    className: propTypes.string,
    variant: propTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outline"
    ]),
    processing : propTypes.bool,
    children: propTypes.node
}

export default function Button({
    className = "",
    variant = "primary",
    type = "submit",
    processing,
    children,
}) {
    return (
        <button
            type={type}
            className={`rounded-2xl py-[13px] text-center w-full ${
                processing && "opacity-30"
            } btn-${variant} ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}
