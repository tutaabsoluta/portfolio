import { useForm } from "react-hook-form";
import { ContactInput } from "./ContactInput";
import { ContactMessage } from "./ContactMessage";
import { FormButton } from "./FormButton";

export const ContactForm = () => {
  const { register, handleSubmit, formState = { errors } } = useForm();

  const onSubmit = ( e ) => {
    e.preventDefault()

  };

  return (
    <form className="md:w-[600px] 2xl:w-[700px] mx-auto" onSubmit={onSubmit}>
      <div className="grid grid-cols-2 gap-4 mb-5">
        <ContactInput name={"Name"} />
        <ContactInput name={"Email"} />
      </div>

      <ContactInput name={"Subject"} className={"mb-5 group"} />
      <ContactMessage name={"Message"} />

      <div className="flex justify-center">
        <FormButton />
      </div>
    </form>
  );
};
