import { ReactNode } from "react";

const SectionWrapper = (props: { className?: string; children: ReactNode }) => {
  return (
    <section className={`w-full px-4 my-32 ${props.className}`}>
      <div className="max-w-7xl mx-auto">{props.children}</div>
    </section>
  );
};

export default SectionWrapper;
