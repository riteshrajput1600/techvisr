export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-banner.png')" }}
    >
      <div className="absolute inset-0 bg-white/70" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-600">
            Data + AI Consulting
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-snug text-gray-900 sm:text-4xl md:text-5xl md:leading-tight">
            Delivering <span className="font-bold">AI-powered</span> solutions to
            accelerate your <span className="font-bold">Fabric migration</span>
          </h2>

          <p className="mt-4 text-base text-gray-700 sm:mt-6 sm:text-lg">
            Unlock the full potential of your data with our specialized expertise.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
            >
              Book a consultation
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-md border border-gray-500 bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition-colors"
            >
              Explore products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
