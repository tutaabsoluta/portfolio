
export const Button = ({ text, className }) => {
  return (
    <button className={`px-6 py-2 rounded-md font-bold ${className}`}>
        { text }
    </button>
  )
}
1