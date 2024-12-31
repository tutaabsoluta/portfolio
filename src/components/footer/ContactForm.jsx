import { Button } from "../utils";

export const ContactForm = () => {
  return (
    <form className="md:w-[600px] 2xl:w-[700px] mx-auto">
      {/* Grid para Nombre y Correo */}
      <div className="grid grid-cols-2 gap-4 mb-5">
        {/* Name Field */}
        <div className="relative z-0 group">
          <input
            type="text"
            name="floating_name"
            id="floating_name"
            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-terciary border-gray-600 focus:border-primary focus:outline-none focus:ring-0 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_name"
            className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>

        {/* Email Field */}
        <div className="relative z-0 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-terciary border-gray-600 focus:border-primary focus:outline-none focus:ring-0 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
      </div>

      {/* Subject Field */}
      <div className="relative z-0 mb-5 group">
        <input
          type="text"
          name="floating_subject"
          id="floating_subject"
          className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-terciary border-gray-600 focus:border-primary focus:outline-none focus:ring-0 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_subject"
          className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Subject
        </label>
      </div>

      {/* Message Field */}
      <div className="relative z-0 mb-5 group">
        <textarea
          name="floating_message"
          id="floating_message"
          rows="4"
          className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-terciary border-gray-600 focus:border-primary focus:outline-none focus:ring-0 peer"
          placeholder=" "
          required
        ></textarea>
        <label
          htmlFor="floating_message"
          className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Your Message
        </label>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <Button
          text={`Send Message`}
          toSection={""}
          ariaLabel={"Send Message"}
        />
      </div>
    </form>
  );
};
