export const ButtonCustom = ({
  className = "buttonCustomDefault",
  type = "button",
  onClick = () => {},
  text = "button",
  style = {},
  variant = "success",
  fullWidth = "false",
  hasIcon = false,
  ...props
}) => {
  return (
    <button
      style={style}
      type={type}
      variant={variant}
      className={`buttonCustomDefault ${className}`}
      onClick={onClick}
      {...props}
    >
      {hasIcon && hasIcon}
      {text}
    </button>
  );
};
