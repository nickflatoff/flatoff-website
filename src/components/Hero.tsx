import Image from "next/image";
import SectionWrapper from "./sectionLayoutPrimatives/sectionWrapper";
import SideBySide from "./sectionLayoutPrimatives/sideBySide";

const Hero: React.FC = () => {
  return (
    <SectionWrapper className="py-20">
      <SideBySide secondChild={<HeroGallary />}>
        <div className="grid h-full">
          <div className="flex flex-col justify-center text-center rounded-sm lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl mb-8">
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
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded bg-blue-600 text-gray-50"
              >
                Contact us
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded border-white-800"
              >
                Our Services
              </a>
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
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <Image
                layout="responsive"
                width={100}
                height={100}
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                layout="responsive"
                width={100}
                height={100}
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                layout="responsive"
                width={100}
                height={100}
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="w-full p-1 md:p-2">
              <Image
                layout="responsive"
                width={100}
                height={100}
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                layout="responsive"
                width={100}
                height={100}
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                layout="responsive"
                width={100}
                height={100}
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
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
