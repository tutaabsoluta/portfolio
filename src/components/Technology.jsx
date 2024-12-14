
export const Technology = ({ name, url }) => {


    return (
      <div>
        <div className="flex items-center justify-center gap-1 p-3 rounded-full  outline outline-1 outline-primary bg-black">
          <img src={ url } alt="Technology" className="w-4 h-4" />
        </div>
      </div>
    );
  };
  