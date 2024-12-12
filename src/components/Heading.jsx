export const Heading = ({ title1, title2, span }) => {
  return (
    <section className="text-terciary mb-3 max-w-6xl mx-auto h-56 flex items-center justify-center">
      <div
        className="container mx-auto flex items-center justify-center bg-no-repeat bg-center p-8"
        style={{
          backgroundImage: 'url("stripe.svg")',
          backgroundSize: "cover",
        }}
      >
        <div className="w-[100px] h-[2px] bg-primary rounded-md mr-8"></div>
        <h2 className="text-center">
          {title1} <span className="text-primary">{ span }</span> { title2 }
        </h2>
        <div className="w-[100px] h-[2px] bg-primary rounded-md ml-8"></div>
      </div>
    </section>
  );
};
