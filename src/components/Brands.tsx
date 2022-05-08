import Image from "next/image";
import SectionHeader from "./sectionLayoutPrimatives/SectionHeader";
import SectionWrapper from "./sectionLayoutPrimatives/sectionWrapper";

const Brands: React.FC = () => {
  return (
    <SectionWrapper>
      <SectionHeader className="text-center">
        Equipment & Brands We Work On
      </SectionHeader>
      <ul className="flex flex-wrap items-center justify-center">
        <li className="m-4 p-4">
          <Image
            src="/logos/Sovda-Logo-250x250-Black.png"
            alt="Sovda"
            width={200}
            height={200}
          />
        </li>
        <li className="m-4 p-4">
          {" "}
          <Image
            src="/logos/vortxkleanair.png"
            alt="VortX EcoFilter"
            width={100}
            height={100}
          />
        </li>
        <li className="m-4 p-4">
          <Image
            src="/logos/loring-logo-black-notag.svg"
            alt="Loring"
            width={200}
            height={200}
          />
        </li>
        <li className="m-4 p-4">
          <Image
            src="/logos/probat-logo.png"
            alt="Probat"
            width={100}
            height={100}
          />
        </li>
        <li className="m-4 p-4">
          <Image
            src="/logos/Diedrich-logo.png"
            alt="Dietrich"
            width={100}
            height={100}
          />
        </li>
        <li className="m-4 p-4">
          <Image
            src="/logos/san-fran-logo.webp"
            alt="San Franciscan"
            width={220}
            height={100}
          />
        </li>
        <li className="m-4 p-4">
          <Image
            src="/logos/Giesen-Coffee-Roasters-White.png"
            alt="Giesen"
            width={220}
            height={100}
          />
        </li>
        <li className="m-4 p-4">
          <Image
            src="/logos/proaster-logo.png"
            alt="Proaster"
            width={220}
            height={100}
          />
        </li>
      </ul>
      <ul className="mt-14 flex flex-wrap items-center justify-center">
        <li className="m-4 rounded-xl bg-slate-800 p-8">Conveyance Systems</li>
        <li className="m-4 rounded-xl bg-slate-800 p-8">Optical Sorters</li>
        <li className="m-4 rounded-xl bg-slate-800 p-8">Afterburners</li>
        <li className="m-4 rounded-xl bg-slate-800 p-8">
          Relay and electrical cabinets
        </li>
        <li className="m-4 rounded-xl bg-slate-800 p-8">And Much More...</li>
      </ul>
    </SectionWrapper>
  );
};

export default Brands;
