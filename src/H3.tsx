import { FC, HTMLAttributes, memo } from "react";

type H3Props = HTMLAttributes<HTMLHeadElement>

const H3: FC<H3Props> = (props) => {
  return <>
   <h3 className="text-lg font-medium leading-6 text-gray-900">
      {props.children}
    </h3></>;
};

H3.defaultProps = {};

export default memo(H3);