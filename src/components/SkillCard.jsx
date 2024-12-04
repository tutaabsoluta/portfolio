
export const SkillCard = ({title, image}) => {
  return (
    <div className="flex flex-col items-center max-w-20">
        <div>
            <img src={ image } alt={ title } />
        </div>

        <div className="mt-4">
            <p className="text-[24px] text-center text-slate-600">{ title }</p>
        </div>
    </div>
  )
}
