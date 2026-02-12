import React from "react";
import { Mail } from "lucide-react";

export default function MailToCta() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight max-w-4xl">
          Make the move to Microsoft Fabric
        </h2>

        <p className="mt-6 text-lg text-gray-600">
          Let’s accelerate your delivery and optimize your operations.
        </p>

        <div className="mt-6 flex items-center gap-3 text-red-600 font-semibold text-lg">
          <Mail className="w-6 h-6" />
          <a
            href="mailto:CustomerSuccess@MAQSoftware.com"
            className="hover:underline break-all"
          >
            CustomerSuccess@MAQSoftware.com
          </a>
        </div>
      </div>
    </section>
  );
}