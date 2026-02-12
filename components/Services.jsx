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
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Services we provide
        </h2>

        {/* Grid */}
        <div
          className="mt-12 grid gap-8 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-3"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white border rounded-lg p-8 hover:shadow-md transition duration-300"
              >
                <Icon className="w-8 h-8 text-gray-800 mb-6" />

                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>

                <a
                  href="#"
                  className="text-red-600 text-sm font-semibold hover:underline"
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
