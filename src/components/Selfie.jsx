
export const Selfie = () => {
  return (
    <div className="relative">
    {/* BG Image */}
    <img
      src="selfie-bg.svg"
      alt="Background Color"
      className="w-full max-w-[16rem] object-contain"
    />

    {/* Selfie */}
    <img
      src="selfie.webp"
      alt="Selfie Image"
      className="absolute top-0 left-0 w-full max-w-[16rem] object-contain"
      style={{
        WebkitMaskImage: "url('selfie-bg.svg')",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "cover",
        maskImage: "url('selfie-bg.svg')",
        maskRepeat: "no-repeat",
        maskSize: "cover",
      }}
    />
  </div>
  )
}
