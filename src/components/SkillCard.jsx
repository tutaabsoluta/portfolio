
export const SkillCard = ({title, image}) => {
  return (
    <div className="flex flex-col items-center max-w-20">
        <div className="rounded-full bg-slate-200 p-4 outline outline-1 outline-slate-700">
            <img src={ image } alt={ title } className="w-10 h-10 grayscale hover:grayscale-0 transition-all duration-300 ease-in-out hover:scale-105" />
        </div>

        <div className="mt-4">
            <p className="text-sm text-center text-slate-600">{ title }</p>
        </div>
    </div>
  )
}
