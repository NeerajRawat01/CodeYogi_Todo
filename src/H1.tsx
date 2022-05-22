import { FC, memo } from "react";

type H1Props = {children:string};

const H1: FC<H1Props> = (props) => {
  return <>
    <h1 className="text-3xl font-bold leading-tight text-gray-900">
      {props.children}
    </h1></>;
};

H1.defaultProps = {};

export default memo(H1);