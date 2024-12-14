
export const Technology = ({ name, url }) => {


    return (
      <div>
        <div className="flex items-center justify-center gap-1 px-4 py-1 rounded-full  outline outline-2 outline-secondary bg-slate-900">
          <img src={ url } alt="Technology" className="w-3 h-3" />
          <p className="text-xs text-terciary">{name}</p>
        </div>
      </div>
    );
  };
  