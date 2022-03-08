import React from "react";

import Header from "../components/navHeader";
import Footer from "../components/footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="min-h-screen bg-slate-50">
        <Header />
        <div className="">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
