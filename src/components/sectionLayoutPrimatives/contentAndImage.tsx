import Image, { ImageProps } from "next/image";
import { ReactNode } from "react";

const ContentAndImage = (props: {
  contentRight?: boolean;
  src?: string;
  imgLayout?: ImageProps["layout"];
  imgW?: number;
  imgH?: number;
  imgTranslate?: string;
  imgClipPath?: string;
  background?: boolean;
  alt?: string;
  imgAlt?: string;
  title?: string;
  children?: ReactNode;
  className?: string;
}) => {
  // calculate aspect ratio for backround
  const aspectRatio = (props.imgH || 0) / (props.imgW || 0) || 0;
  return (
    <div
      className={`grid-flow-row-dense grid-cols-2 gap-4 lg:grid ${props.className}`}
    >
      <div className={`${props.contentRight ? "md:col-start-2" : ""}`}>
        <h3>{props.title}</h3>
        <div>{props.children}</div>
      </div>
      <div className="relative">
        {props.src && (
          <div className={props.imgTranslate}>
            <div
              style={{ paddingTop: `${aspectRatio * 100}%` }}
              className={`absolute 
              min-w-full translate-x-4 translate-y-4 bg-yellow-800
              
              ${props.imgClipPath} ${props.background ? "" : "hidden"}`}
            ></div>
            <Image
              className={`rounded-lg object-cover ${props.imgClipPath}`}
              src={props.src}
              width={props.imgW}
              height={props.imgH}
              layout={props.imgLayout ? props.imgLayout : "fill"}
              alt=""
            />
          </div>
        )}
        {props.src ? (
          <></>
        ) : (
          <div className="aspect-video h-full w-full bg-gray-600"></div>
        )}
      </div>
    </div>
  );
};

export default ContentAndImage;
