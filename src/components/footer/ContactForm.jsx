import { Button } from "../utils";
import { ContactInput } from "./ContactInput";
import { ContactMessage } from "./ContactMessage";

export const ContactForm = () => {
  return (
    <form className="md:w-[600px] 2xl:w-[700px] mx-auto">
      {/* Grid para Nombre y Correo */}
      <div className="grid grid-cols-2 gap-4 mb-5">
        {/* Name Field */}
        <ContactInput name={"Name"} />

        {/* Email Field */}
        <ContactInput name={"Email"} />
      </div>

      {/* Subject Field */}
      <ContactInput name={"Subject"} className={"mb-5 group"} />

      {/* Message Field */}
      <ContactMessage name={"Message"} />

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
