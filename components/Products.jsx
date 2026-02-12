import { Database, Code2, FileCheck, Clock, TrendingUp } from "lucide-react";

const products = [
  {
    icon: Database,
    title: "AI-DataLens",
    desc: "Unlock data-driven insights with AI-powered conversational analytics.",
  },
  {
    icon: Code2,
    title: "EmbedFAST",
    desc: "Effortlessly embed Power BI into your apps without the complexity of writing your own code.",
  },
  {
    icon: FileCheck,
    title: "CertyFAST",
    desc: "Streamline Power BI model development with automated error detection, documentation, and DAX measure formatting.",
  },
  {
    icon: Clock,
    title: "LoadFAST",
    desc: "Identify performance bottlenecks in your Power BI reports and optimize the capacity setup for your infrastructure.",
  },
  {
    icon: TrendingUp,
    title: "MigrateFAST",
    desc: "Simplify data and reporting platform migration to Microsoft Fabric with AI-powered tools for faster and easier transitions.",
  },
];

export default function Products() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Explore our products
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl">
          Solutions designed to improve and streamline your operations
        </p>

        {/* Responsive Grid */}
        <div
          className="mt-12 grid gap-6 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-3 
                        xl:grid-cols-5"
        >
          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <div
                key={index}
                className="bg-white border rounded-lg p-6 hover:shadow-md transition duration-300"
              >
                <Icon className="w-8 h-8 text-gray-800 mb-4" />

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {product.title}
                </h3>

                <p className="text-sm text-gray-600 mb-6">{product.desc}</p>

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
