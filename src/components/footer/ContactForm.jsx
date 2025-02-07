import { useForm } from "react-hook-form";
import { ErrorNotification } from "../utils";
import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";

export const ContactForm = () => {


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    toast.success('Message sent successfully!', {
      icon: <FaCheckCircle style={{ color: '#A5FFB3', width: 25, height: 25 }} />, 
      style: {
        backgroundColor: '#021526',
        color: '#CBD5E1'
      },
      autoClose: 3000,
      hideProgressBar: true ,
      closeOnClick: true
    })
    reset();
  };

  return (
    <form
      className="md:w-[600px] 2xl:w-[700px] mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-2 gap-4 mb-5">
        {/* Name field */}
        <div className="relative z-0 group">
          <input
            {...register("name", {
              required: "Please provide your name.",
              minLength: {
                value: 3,
                message: "Must be at least 3 characters",
              },
              maxLength: {
                value: 30,
                message:
                  "The name exceeds the maximum length of 30 characters.",
              },
              pattern: {
                value: /^[a-zA-ZÀ-ÿ\s'-]+$/,
                message:
                  "Please enter a valid name without numbers or special characters.",
              },
            })}
            type="text"
            name={"name"}
            id={"name"}
            className={`block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-terciary border-gray-600 focus:border-primary focus:outline-none focus:ring-0 peer`}
            placeholder=" "
          />
          <label
            htmlFor={"name"}
            className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
          {<ErrorNotification>
            {errors.name?.message}
          </ErrorNotification>}
        </div>

        {/* Email field */}
        <div className="relative z-0 group">
          <input
            {...register("email", {
              required: "Don’t forget to add your email",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: `Invalid format: Try something like: name@example.com.`,
              },
            })}
            type="text"
            name={"email"}
            id={"email"}
            className={`block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-terciary border-gray-600 focus:border-primary focus:outline-none focus:ring-0 peer`}
            placeholder=" "
          />
          <label
            htmlFor={"email"}
            className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
          {<ErrorNotification>{errors.email?.message}</ErrorNotification>}
        </div>
      </div>

      {/* Subject field */}
      <div className="relative z-0 group">
        <input
          {...register("subject", {
            required:
              "A subject will help me understand what your message is about.",
            maxLength: {
              value: 150,
              message:
                "The subject exceeds the maximum length of 150 characters",
            },
            minLength: {
              value: 3,
              message: "The message should contain at least 3 characters",
            },
          })}
          type="text"
          name={"subject"}
          id={"subject"}
          className={`block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-terciary border-gray-600 focus:border-primary focus:outline-none focus:ring-0 peer`}
          placeholder=" "
        />
        <label
          htmlFor={"subject"}
          className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Subject
        </label>
        {<ErrorNotification>{errors.subject?.message}</ErrorNotification>}
      </div>

      {/* Message field */}
      <div className="relative z-0 mb-5 group">
        <textarea
          {...register("message", {
            required:
              "What’s on your mind? Drop me a message, and I’ll get back to you.",
            maxLength: {
              value: 1000,
              message:
                "The subject exceeds the maximum length of 1000 characters",
            },
            minLength: {
              value: 10,
              message: "The message should contain at least 10 characters",
            },
          })}
          name={"message"}
          id={"message"}
          rows="4"
          className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-terciary border-gray-600 focus:border-primary focus:outline-none focus:ring-0 peer mt-4"
          placeholder=" "
        ></textarea>
        <label
          htmlFor={"message"}
          className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Message
        </label>
        {<ErrorNotification>{errors.message?.message}</ErrorNotification>}
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-2xl group cursor-pointer mt-4"
        >
          <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-primary opacity-[3%]"></span>
          <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-primary opacity-100 group-hover:-translate-x-8"></span>
          <span className="relative w-full text-left text-primary transition-colors duration-200 ease-in-out group-hover:text-accent">
            Send Message
          </span>
          <span className="absolute inset-0 border-[3px] border-primary rounded-2xl"></span>
        </button>
      </div>
    </form>
  );
};
