import { useForm, ValidationError } from "@formspree/react";

const ContactForm: React.FC<{ subject?: string }> = ({ subject }) => {
  const [state, handleSubmit] = useForm("xzbordkp");
  if (state.succeeded) {
    return <p>Thanks for reaching out! We will talk soon.</p>;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="-m-2 flex flex-wrap">
          <div className="w-1/2 p-2">
            <div className="relative">
              <label htmlFor="name" className="text-sm leading-7 text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded border border-gray-100  bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200"
              />
            </div>
          </div>
          <div className="w-1/2 p-2">
            <div className="relative">
              <label htmlFor="email" className="text-sm leading-7 text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded border border-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200"
              />
            </div>
          </div>
          <div className="hidden w-full p-2">
            <div className="relative">
              <label htmlFor="subject" className="text-sm leading-7 text-white">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={subject}
                readOnly
                className="w-full rounded border border-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200"
              />
            </div>
          </div>
          <div className="w-full p-2">
            <div className="relative">
              <label htmlFor="message" className="text-sm leading-7 text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="h-32 w-full resize-none rounded border border-gray-100 bg-opacity-50 py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200"
              ></textarea>
            </div>
          </div>
          <div className="w-full p-2">
            <button
              type="submit"
              className="mx-auto flex rounded border-0  py-2 px-8 text-lg bg-blue-600 text-gray-50 hover:bg-blue-700 focus:outline-none "
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
