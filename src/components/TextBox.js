import React from "react";

export const TextBox = ({
  register = () => {},
  errors = {},
  name = "",
  type = "text",
  placeholder = name,
  specificHolder = false,
  label = false,
}) => {
  return (
    <div className="core-input">
      {label && <label className="core-input__label">{label}</label>}
      <input
        className="core-input__field"
        type={type}
        name={name}
        placeholder={specificHolder ? specificHolder : placeholder}
        {...register}
      />
      {errors[name] && (
        <span className="core-input__field-error">{errors[name]?.message}</span>
      )}
    </div>
  );
};
