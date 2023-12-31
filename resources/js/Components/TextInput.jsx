import React,{ useEffect, useRef } from "react";
import PropTypes from "prop-types";

TextInput.propTypes = {
    type: PropTypes.oneOf(["text", "email", "password", "number", "file"]),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
};

export default function TextInput(
    {
        type = "text",
        variant = "primary",
        autoComplete,
        name,
        value,
        defaultValue,
        placeholder,
        required,
        isError,
        handleChange,
        className = "",
        isFocused = false,
    }
) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${
                    isError && "input-error"
                } input-${variant} ${className}`}
                name={name}
                value={value}
                defaultValue={defaultValue}
                required={required}
                autoComplete={autoComplete}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
                ref={input}
            />
        </div>
    );
}
