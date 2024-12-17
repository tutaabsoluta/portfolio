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
      <img
        src="shape4.svg"
        alt="Shape 3"
        className="absolute top-0 left-0 w-full max-w-[18rem] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
      />

      {/* Selfie */}
      <img
        src="selfie.webp"
        alt="Selfie Image"
        className="absolute top-0 left-0 w-full max-w-[18rem] object-contain z-20"
        style={{
          WebkitMaskImage: "url('shape.svg')",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
          maskImage: "url('shape2.svg')",
          maskRepeat: "no-repeat",
          maskSize: "cover",
        }}
      />
    </div>
  );
};
