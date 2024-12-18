export const Button = ({ text }) => {
  return (
    <a
      href="#_"
      class="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300  rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-terciary hover:ring-offset-indigo-500 ease focus:outline-none"
    >
      <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-terciary opacity-10 group-hover:translate-x-0"></span>
      <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-terciary opacity-10 group-hover:translate-x-0"></span>
      <span class="relative z-20 flex items-center text-sm">{ text }</span>
    </a>
  );
};
1;
