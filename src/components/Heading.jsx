export const Heading = ({ title }) => {
  return (
    <div>
      <h2 className="text-center font-bold tracking-tight">{ title }</h2>
      <div className="w-[100px] h-[5px] bg-primary container mx-auto rounded-md mt-6 mb-12"></div>
    </div>
  );
};
