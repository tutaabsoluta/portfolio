export const Technology = ({ imageUrl, alt }) => {
  return (
    <div className="bg-optional/5 rounded-full h-6 w-6 flex items-center justify-center outline outline-1 outline-slate-600 group-hover:bg-optional/10 transition-all duration-300">
    <img
      src={ imageUrl } 
      alt={`${alt} logo`}
      className="w-4 h-4 transition-all duration-300"
    />
  </div>
  );
};
