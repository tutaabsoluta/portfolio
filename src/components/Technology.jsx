export const Technology = ({ name, url }) => {
  return (
    <div className="relative inline-flex h-7 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#cbffe7_0%,#39b26f_50%,#cbffdf_100%)]" />
      <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-black px-3 py-1 text-xs font-medium text-emerald-100 backdrop-blur-3xl">
        {name}
      </span>
    </div>
  );
};
