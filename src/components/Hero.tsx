import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "./sectionLayoutPrimatives/sectionWrapper";
import SideBySide from "./sectionLayoutPrimatives/sideBySide";
import Button from "../components/Button";

const Hero: React.FC = () => {
  return (
    <SectionWrapper className="pb-20">
      <SideBySide secondChild={<HeroGallary />}>
        <div className="grid h-full">
          <div className="flex flex-col justify-center rounded-sm text-center lg:text-left">
            <h1 className="mb-8 text-5xl font-bold leading-none sm:text-6xl">
              Your partner in roastery{" "}
              <span className="text-sky-500">layout,</span>{" "}
              <span className="text-red-500">commissioning</span> &{" "}
              <span className="text-orange-500">maintenance</span>
            </h1>
            {/* <p className="mt-6 mb-8 text-lg sm:mb-12">
            Dictum aliquam porta in condimentum ac integer
            <br className="hidden md:inline lg:hidden" />
            turpis pulvinar, est scelerisque ligula sem
          </p> */}
            <div className="mb-12 flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link href="/contact">
                <a rel="noopener noreferrer">
                  <Button>Contact us</Button>
                </a>
              </Link>
              <Link href="#services">
                <a rel="noopener noreferrer">
                  <Button secondary>Our Services</Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </SideBySide>
    </SectionWrapper>
  );
};

const HeroGallary: React.FC = () => {
  return (
    <section className="overflow-hidden text-gray-700">
      <div className="container  mx-auto">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <Image
                layout="responsive"
                width={100}
                height={100}
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                layout="responsive"
                width={100}
                height={100}
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                layout="responsive"
                width={100}
                height={100}
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                layout="responsive"
                width={100}
                height={100}
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                layout="responsive"
                width={100}
                height={100}
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                layout="responsive"
                width={100}
                height={100}
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
