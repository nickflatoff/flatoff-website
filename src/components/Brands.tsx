import Image from "next/image";
import SectionHeader from "./sectionLayoutPrimatives/SectionHeader";
import SectionWrapper from "./sectionLayoutPrimatives/sectionWrapper";

const Brands: React.FC = () => {
  return (
    <SectionWrapper>
      <SectionHeader className="text-center">
        Experience with a variety of equipment & brands
      </SectionHeader>
      <ul className="flex flex-wrap justify-center items-center">
        <li className="p-4 m-4">
          <Image
            src="/logos/Sovda-Logo-250x250-Black.png"
            alt="Sovda"
            width={200}
            height={200}
          />
        </li>
        <li className="p-4 m-4">
          {" "}
          <Image
            src="/logos/vortxkleanair.png"
            alt="VortX EcoFilter"
            width={100}
            height={100}
          />
        </li>
        <li className="p-4 m-4">
          <Image
            src="/logos/loring-logo-black-notag.svg"
            alt="Loring"
            width={200}
            height={200}
          />
        </li>
        <li className="p-4 m-4">
          <Image
            src="/logos/probat-logo.png"
            alt="Probat"
            width={100}
            height={100}
          />
        </li>
        <li className="p-4 m-4">
          <Image
            src="/logos/Diedrich-logo.png"
            alt="Dietrich"
            width={100}
            height={100}
          />
        </li>
        <li className="p-4 m-4">
          <Image
            src="/logos/san-fran-logo.webp"
            alt="San Franciscan"
            width={220}
            height={100}
          />
        </li>
        <li className="p-4 m-4">
          <Image
            src="/logos/Giesen-Coffee-Roasters-White.png"
            alt="Giesen"
            width={220}
            height={100}
          />
        </li>
        <li className="p-4 m-4">
          <Image
            src="/logos/proaster-logo.png"
            alt="Proaster"
            width={220}
            height={100}
          />
        </li>
        <li className="p-8 m-4 bg-slate-800 rounded-xl">Conveyance Systems</li>
        <li className="p-8 m-4 bg-slate-800 rounded-xl">Optical Sorters</li>
        <li className="p-8 m-4 bg-slate-800 rounded-xl">Afterburners</li>
        <li className="p-8 m-4 bg-slate-800 rounded-xl">
          Relay and electrical cabinets
        </li>
        <li className="p-8 m-4 bg-slate-800 rounded-xl">And Much More...</li>
      </ul>
    </SectionWrapper>
  );
};

export default Brands;
