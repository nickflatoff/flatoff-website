import { NextPage } from "next";
import Head from "next/head";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ContentAndImage from "../components/sectionLayoutPrimatives/contentAndImage";
import SectionHeader from "../components/sectionLayoutPrimatives/SectionHeader";
import SectionWrapper from "../components/sectionLayoutPrimatives/sectionWrapper";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title key={"title"}>About Nicholas</title>
      </Head>
      <Nav />
      <SectionWrapper>
        <ContentAndImage
          src="/nicholas_flatoff.webp"
          imgLayout="intrinsic"
          imgW={1500}
          imgH={2081}
          imgTranslate="-translate-y-10"
          imgClipPath="clip-nick"
          background
        >
          <SectionHeader>About Nicholas Flatoff</SectionHeader>
          <p>
            Nicholas was born a tinkerer. After fixing a broken espresso machine
            found in his parent’s basement when he was 14, he began the endless
            journey towards pulling the perfect shot.{" "}
          </p>
          <br />
          <p>
            Nicholas flipped espresso machines throughout college, where he
            studied Aircraft Maintenance. After completing his AMT
            certification, Nicholas worked as a barista and cafe manager until
            he accepted a job as a portfolio manager for a real estate group.
          </p>
          <br />
          <p>
            During his hiatus from the coffee industry, Nicholas remained
            connected to coffee by serving on the board of a non-profit tasked
            with assisting small businesses during startup and offering small
            business consulting services. Nicholas has assisted cafes,
            roasteries, brewers and other ventures successfully launch, sell, or
            buy their businesses.
          </p>
          <br />
          <p>
            Burned out by office work, Nicholas returned to the coffee industry
            as a roaster systems technician in 2018. Since then, Nicholas has
            performed installs and maintenance in more than 20 states and
            internationally across North America, Europe and the Middle East.
          </p>
          <br />
          <p>
            Nicholas works closely with Sovda Coffee as an optical sorter
            technician and trainer. He has worked on Loring roasters extensively
            and is competent with both conventional and air roasters, plus
            storage, conveyance and QC systems for both green and roasted
            coffee.
          </p>
          <br />
          <p>
            Nicholas holds an FAA Aircraft Maintenance Certification and is a
            certified Q grader.
          </p>
        </ContentAndImage>
      </SectionWrapper>
      <Cta />
      <Footer />
    </>
  );
};

export default About;
