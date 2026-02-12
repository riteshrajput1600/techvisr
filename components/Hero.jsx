export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center text-center"
      style={{ backgroundImage: "url('/images/hero-banner.png')" }}
    >
      <div className="absolute inset-0 bg-white/75" />

      <div className="relative max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:py-10 md:py-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug md:leading-tight">
          Delivering <span className="font-bold">AI-powered</span> solutions to
          accelerate your <span className="font-bold">Fabric migration</span>
        </h2>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700">
          Unlock the full potential of your data with our specialized expertise.
        </p>
      </div>
    </section>
  );
}
