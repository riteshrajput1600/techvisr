export default function Footer() {
  return (
    <footer id="about" className="bg-gray-900 py-16 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className="grid gap-10 border-b border-gray-800 pb-10
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-4"
        >
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-4 text-sm">
              <li>Agentic AI & machine learning</li>
              <li>Data & analytics</li>
              <li>Reporting & visualization</li>
              <li>Application modernization</li>
              <li>Cloud optimization</li>
              <li>Security</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Products</h3>
            <ul className="space-y-4 text-sm">
              <li>AI-DataLens</li>
              <li>EmbedFAST</li>
              <li>CertyFAST</li>
              <li>LoadFAST</li>
              <li>MigrateFAST</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Resources</h3>
            <ul className="space-y-4 text-sm">
              <li>Case Studies</li>
              <li>Consulting offers</li>
              <li>Power BI custom visual guide</li>
              <li>Best practice guides</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">About us</h3>
            <ul className="space-y-4 text-sm">
              <li>Who we are</li>
              <li>News</li>
              <li>Careers</li>
              <li>Social impact</li>
              <li>Sustainability</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>

        <p className="pt-6 text-xs text-gray-400">
          &copy; {new Date().getFullYear()} TechVisr. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
