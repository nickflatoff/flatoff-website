import Image from "next/image";
import { ReactNode } from "react";
import SectionWrapper from "./sectionWrapper";

const ContentAndImage = (props: {
  contentRight?: boolean;
  src?: string;
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
        className={` w-100 h-100 ${props.contentRight ? "md:col-start-2" : ""}`}
      >
        <h3>{props.title}</h3>
        <div>{props.children}</div>
      </div>
      <div className="bg-rose-700 w-100 h-100">
        {props.src && <Image src={props.src} alt="" />}
        {props.src || (
          <div className="w-full h-full aspect-video bg-gray-600"></div>
        )}
      </div>
    </div>
  );
};

export default ContentAndImage;
