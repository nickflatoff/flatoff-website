import type { NextPage } from "next";
import Head from "next/head";
import Brands from "../components/Brands";
import Hero from "../components/Hero";
import Cta from "../components/Cta";
import Services from "../components/Services";
import Nav from "../components/Nav";
import Footer from "../components/PageFooter";

const Home: NextPage<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      {/* <Head>
        <title>Nicholas Flatoff</title>
        <meta
          name="description"
          content="Your partner in roastery layout, commissioning & maintenance"
        />
      </Head> */}
      <Nav />
      <Hero />
      <main>
        <Services />
        <Cta />
        <Brands />
        <Cta />
        <Footer />
      </main>
    </div>
  );
};

// set layout via...
// import PageWithLayoutType from "../types/pageWithLayout";
// (Home as PageWithLayoutType).layout = DefaultLayout;

export default Home;
