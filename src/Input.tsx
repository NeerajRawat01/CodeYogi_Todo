import { FC, HTMLInputTypeAttribute, memo } from "react";

type InputProps =  HTMLInputTypeAttribute<HTMLInputElement>

const Input: FC<InputProps> = ({placeholder, onChange , value}) => {
  return <>
   <input type="text" placeholder={placeholder} value={value} onChange={onChange} className="block w-full border-gray-300 p-3 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" />
   </>;
};

Input.defaultProps = {};

export default memo(Input);

