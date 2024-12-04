export const ContactForm = () => {
  return (
    <form className="max-w-md mx-auto">
      <div className="flex flex-col mb-6">
        <label htmlFor="name" className="mb-2 font-bold">
          Name
        </label>
        <input type="text" id="name" className="outline outline-1 rounded-lg min-h-11 outline-slate-300" />
      </div>

      <div className="flex flex-col mb-6">
        <label htmlFor="email" className="mb-2 font-bold">Email</label>
        <input type="email" id="email" className="outline outline-1 rounded-lg min-h-11 outline-slate-300" />
      </div>

      <div className="flex flex-col mb-6">
        <label htmlFor="message" className="mb-2 font-bold">
          Message
        </label>
        <textarea id="message" rows={5} className="outline outline-1 rounded-lg outline-slate-300"></textarea>
      </div>

      <button className="bg-primary px-6 py-2 rounded-lg font-bold">Send</button>
    </form>
  );
};
