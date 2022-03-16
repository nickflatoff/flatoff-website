import { NextPage } from "next";
import ContactForm from "../components/ContactForm";
import analytics from "../analytics/analytics";

const Contact: NextPage = () => {
  analytics.track("contact page visit");
  return (
    <section className="body-font relativ">
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
        <div className="mx-auto md:w-2/3 lg:w-1/2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
