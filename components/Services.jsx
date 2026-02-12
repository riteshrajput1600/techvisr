import {
  Brain,
  BarChart3,
  LineChart,
  MonitorSmartphone,
  Cloud,
  Shield,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: "Agentic AI & machine learning",
      desc: "Harness the power of artificial intelligence and machine learning to automate processes and uncover hidden patterns.",
    },
    {
      icon: BarChart3,
      title: "Data & analytics",
      desc: "Drive growth through data-driven insights and powerful analytics.",
    },
    {
      icon: LineChart,
      title: "Reporting & visualization",
      desc: "Visualize your data with intuitive reports and dashboards that provide clarity and insight at a glance.",
    },
    {
      icon: MonitorSmartphone,
      title: "Application modernization",
      desc: "Update legacy systems with modern, scalable applications that enhance performance and user experience.",
    },
    {
      icon: Cloud,
      title: "Cloud optimization",
      desc: "Adopt technologies for flexible, scalable, and cost-effective IT solutions that grow with your business.",
    },
    {
      icon: Shield,
      title: "Security",
      desc: "Fortify your business with advanced security solutions that protect data, systems, and users from evolving threats.",
    },
  ];

  return (
    <section id="services" className="bg-gray-100 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
          Services we provide
        </h2>
        <p className="mt-4 max-w-2xl text-gray-600">
          From strategy to implementation, we help teams build scalable analytics
          and AI foundations.
        </p>

        <div
          className="mt-12 grid gap-6 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-3"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon className="mb-6 h-8 w-8 text-red-600" />

                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-gray-600">
                  {service.desc}
                </p>

                <a
                  href="#"
                  className="text-sm font-semibold text-red-600 transition-colors hover:text-red-700"
                >
                  Learn more &gt;
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
