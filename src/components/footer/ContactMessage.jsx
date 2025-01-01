
export const ContactMessage = ({ name }) => {
  return (
    <div className="relative z-0 mb-5 group">
    <textarea
      name={ `floating_${name}` }
      id={ `floating_${name}` }
      rows="4"
      className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-terciary border-gray-600 focus:border-primary focus:outline-none focus:ring-0 peer"
      placeholder=" "
      required
    ></textarea>
    <label
      htmlFor={ `floating_${name}` }
      className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      { name }
    </label>
  </div>
  )
}
