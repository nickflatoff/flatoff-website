import Link from "next/link";
import SectionWrapper from "./sectionLayoutPrimatives/sectionWrapper";
import { NextRouter, useRouter } from "next/router";

import React from "react";

const Nav: React.FC = () => {
  const navItems: { title: string; path: string }[] = [
    { title: "About", path: "/about" },
    { title: "Services", path: "/#services" },
    { title: "Contact", path: "/contact" },
  ];

  const router = useRouter();

  return (
    <SectionWrapper noPadding>
      <div>
        <ul className="mt-10 flex  justify-between font-semibold">
          {/* Website home navigation link */}
          <span className="text-3xl font-bold">
            <NavElement title="Nicholas Flatoff" path="/" router={router} />
          </span>
          {/* Other navigation links, as defined in navItems */}
          <div className="flex space-x-10">
            {navItems.flatMap((item, index) => {
              if (!item.path) return [];
              return (
                <NavElement
                  title={item.title}
                  path={item.path}
                  key={index}
                  router={router}
                />
              );
            })}
          </div>
        </ul>
      </div>
    </SectionWrapper>
  );
};

const NavElement: React.FC<{
  title: string;
  path: string;
  router: NextRouter;
}> = ({ title, path, router }) => {
  return (
    <div className="text-center">
      <Link href={path}>
        <a>
          <li
            className={`${
              router.pathname === path ? "underline underline-offset-4 " : ""
            }`}
          >
            {title}
          </li>
        </a>
      </Link>
    </div>
  );
};

export default Nav;
