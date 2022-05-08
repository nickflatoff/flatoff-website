import Link from "next/link";
import Button from "./Button";
import SectionWrapper from "./sectionLayoutPrimatives/sectionWrapper";

const Cta: React.FC = () => {
  return (
    <SectionWrapper noPadding className="bg-slate-800 py-20">
      <div className="container mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row">
        <div className="flex flex-col justify-center lg:text-left">
          <p className="mb-1 text-sm font-medium tracking-widest text-slate-200">
            Do you have a project you need done right?
          </p>
          <h1 className="title-font py-2 text-3xl font-medium leading-tight">
            Next step: reach out and tell us what you have in mind
          </h1>
        </div>
        <div className="mt-6 flex flex-shrink-0 flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
          <div className="max-w-sm">
            <Link href="/contact">
              <a>
                <Button secondary>Contact Us</Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Cta;
