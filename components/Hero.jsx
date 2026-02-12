export default function Hero() {
  return (
    <section 
      className="py-24 text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-banner.png')" }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
          Delivering <span className="font-bold">AI-powered</span> solutions to
          accelerate your <span className="font-bold">Fabric migration</span>
        </h2>

        <p className="mt-6 text-gray-600 text-lg">
          Unlock the full potential of your data with our specialized expertise.
        </p>
      </div>
    </section>
  );
}
