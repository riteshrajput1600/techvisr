const services = [
  {
    title: "Agentic AI & machine learning",
    desc: "Harness the power of artificial intelligence and machine learning to automate processes and uncover hidden patterns.",
  },
  {
    title: "Data & analytics",
    desc: "Drive growth through data-driven insights and powerful analytics.",
  },
  {
    title: "Reporting & visualization",
    desc: "Visualize your data with intuitive reports and dashboards that provide clarity and insight at a glance.",
  },
  {
    title: "Application modernization",
    desc: "Update legacy systems with modern, scalable applications that enhance performance and user experience.",
  },
  {
    title: "Cloud optimization",
    desc: "Adopt technologies for flexible, scalable, and cost-effective IT solutions that grow with your business.",
  },
  {
    title: "Security",
    desc: "Fortify your business with advanced security solutions that protect data, systems, and users from evolving threats.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-semibold mb-12">
          Services we provide
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-6 hover:shadow-md transition"
            >
              <div className="mb-4">
                <div className="w-10 h-10 bg-gray-100 rounded-md" />
              </div>

              <h4 className="font-semibold mb-3">
                {service.title}
              </h4>

              <p className="text-sm text-gray-600 mb-4">
                {service.desc}
              </p>

              <a
                href="#"
                className="text-red-600 text-sm font-medium hover:underline"
              >
                Learn more &gt;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
