
export const Technology = ({ name, url }) => {


    return (
      <div>
        <div className="flex items-center justify-center gap-1 px-4 rounded-full  outline outline-1 outline-secondary bg-slate-800">
          <img src={ url } alt="Technology" className="w-3 h-3" />
          <p className="text-[10px] text-white">{name}</p>
        </div>
      </div>
    );
  };
  