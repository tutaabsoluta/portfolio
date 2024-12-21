export const Selfie = () => {
  return (
    <div className="relative group">
      {/* BG Image */}
      <img
        src="shape.svg"
        alt="Background Color"
        className="w-full max-w-[18rem] object-contain overflow-hidden"
      />

      {/* Shape3 (Imagen que aparece al hacer hover) */}
      {/* <img
        src="shape5.svg"
        alt="Shape 3"
        className="absolute top-0 left-0 w-full max-w-[18rem] object-contain hidden group-hover:block ease-in-out duration-500 z-10"
      /> */}

      {/* Selfie */}
      <img
        src="selfie.webp"
        alt="Selfie Image"
        className="absolute top-0 left-0 w-full max-w-[18rem] object-contain z-20 grayscale group-hover:grayscale-0 duration-500"
        style={{
          WebkitMaskImage: "url('shape.svg')",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
          maskImage: "url('shape.svg')",
          maskRepeat: "no-repeat",
          maskSize: "cover",
        }}
      />
    </div>
  );
};
