import PropTypes from "prop-types";

const Button = ({ children, textColor, bg, border, hover }) => {
  return (
    <button
      className={`w-32 rounded-3xl py-2 font-bold transition-all ${border} ${textColor} ${bg} ${hover}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  textColor: PropTypes.string,
  bg: PropTypes.string,
  border: PropTypes.string,
  hover: PropTypes.string,
};

Button.defaultProps = {
  children: "Button",
  textColor: "text-white",
  bg: "bg-transparent",
  border: "border-0",
  hover: "",
};

export default Button;
