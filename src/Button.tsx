import { ButtonHTMLAttributes, FC, memo } from "react";

type ButtonProps = {
  theme?: "secondary" | "highlight"; icon?:string
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ theme , icon , children , ...rest }) => {
  let themeClasses =
    "text-white  bg-yellow-500 border-transparent hover:bg-yellow-600";

  let radiusClass = "rounded-md";
  if (theme === "highlight") {
    radiusClass = "rounded-full";
  }

  if (theme === "secondary") {
    themeClasses =
      "text-blue-gray-900 bg-white border-gray-300 hover:bg-blue-gray-50";
  }
  return (
    <>
      <button
        {...rest}
        className={
          "inline-flex justify-center items-center px-4 py-2 text-sm font-medium  border shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 " +
          themeClasses +
          " " +
          radiusClass
        }
      >
        {icon && (
          <span className="mr-2 text-lg -mt-1 inline-block">{icon}</span>
        )}
        {children}
      </button>
    </>
  );
};

Button.defaultProps = {};

export default memo(Button);
