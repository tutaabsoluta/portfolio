import { Heading } from "../components";
import { ContactForm } from "../ui";

export const ContactPage = () => {
  return (
    <div className="mt-36">
      <Heading title="Get in Touch!" />
      <p className="text-center mb-16">If you have any questions or a proposal, feel free to send me a message!</p>
      <ContactForm />
    </div>
  );
};
