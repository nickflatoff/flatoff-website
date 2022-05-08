import { ReactNode } from "react";

const SectionWrapper = (props: {
  className?: string;
  children: ReactNode;
  noPadding?: boolean;
  id?: string;
}) => {
  return (
    <section
      className={`w-full px-4 ${props.noPadding ? "" : "my-32"} ${
        props.className
      }`}
      id={props.id}
    >
      <div className="mx-auto max-w-7xl">{props.children}</div>
    </section>
  );
};

export default SectionWrapper;
