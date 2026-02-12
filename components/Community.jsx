export default function Community() {
  const cards = [
    {
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
      title: "Power BI visual guides",
      desc: "Explore our Power BI custom visuals, designed to elevate your data storytelling and decision-making.",
      link: "View our visual guides >",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581090700227-4c4f50c8b1c3?q=80&w=1200",
      title: "Webinars",
      desc: "Join our experts for in-depth sessions on the latest innovations in data and analytics.",
      link: "Register here >",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
      title: "Best practice guides",
      desc: "Learn about the latest in the industry with our best practice guide blogs.",
      link: "Read our best practice guides >",
    },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Become a part of our community
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl">
          Register for our upcoming webinars and view our newsletters
        </p>

        {/* Responsive Grid */}
        <div
          className="mt-12 grid gap-8 
                        grid-cols-1 
                        md:grid-cols-2 
                        xl:grid-cols-3"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-100 border rounded-lg overflow-hidden hover:shadow-md transition duration-300"
            >
              {/* Image */}
              <div className="h-52 w-full overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {card.title}
                </h3>

                <p className="text-sm text-gray-600 mb-6">{card.desc}</p>

                <a
                  href="#"
                  className="text-red-600 text-sm font-semibold hover:underline"
                >
                  {card.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
