import Image from "next/image";
import { ReactNode } from "react";

const sideBySide = (props: {
  contentRight?: boolean;
  secondChild?: ReactNode;
  imgAlt?: string;
  title?: string;
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`lg:grid grid-cols-2 grid-flow-row-dense gap-4 ${props.className}`}
    >
      <div
        className={`w-100 h-100 ${props.contentRight ? "md:col-start-2" : ""}`}
      >
        {props.title && <h3>{props.title}</h3>}
        {props.children}
      </div>
      <div className=" w-100 h-100">
        {props.secondChild && <div>{props.secondChild}</div>}
        {!props.secondChild && (
          <div className="w-full h-full aspect-video bg-gray-600"></div>
        )}
      </div>
    </div>
  );
};

export default sideBySide;
