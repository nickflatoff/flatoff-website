import { NextPage } from "next";
import ContactForm from "../components/ContactForm";
import analytics from "../analytics/analytics";
import Nav from "../components/Nav";
import {
  MailIcon,
  PhoneIcon,
  MapIcon,
  GlobeIcon,
} from "@heroicons/react/outline";
import SectionWrapper from "../components/sectionLayoutPrimatives/sectionWrapper";
import Head from "next/head";

const Contact: NextPage = () => {
  analytics.track("contact page visit");
  return (
    <>
      <Head>
        <title key={"title"}>Contact Nicholas</title>
      </Head>
      <Nav />
      <SectionWrapper noPadding>
        <div className="container mx-auto px-5 py-24">
          <div className="mb-12 flex w-full flex-col text-center">
            <h1 className="title-font mb-4 text-2xl font-medium sm:text-3xl">
              Contact Us
            </h1>
            {/* <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify.
          </p> */}
          </div>
          <div className="mb-16 flex flex-wrap justify-center space-x-12 ">
            <span className="flex items-center">
              <MailIcon className="mr-2 h-4 w-4" />
              Nicholas@flattoff.net
            </span>
            <span className="flex items-center">
              <PhoneIcon className="mr-2 h-4 w-4" />
              (555) 555-5555
            </span>
            <span className="flex items-center">
              <MapIcon className="mr-2 h-4 w-4" />
              Based in Portland, Oregon
            </span>
            <span className="flex items-center">
              <GlobeIcon className="mr-2 h-4 w-4" />
              Available Globally
            </span>
          </div>
          <div className="mx-auto md:w-2/3 lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Contact;
