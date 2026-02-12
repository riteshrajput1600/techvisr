export default function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid */}
        <div
          className="grid gap-10 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-4"
        >
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-4 text-sm">
              <li>Agentic AI & machine learning</li>
              <li>Data & analytics</li>
              <li>Reporting & visualization</li>
              <li>Application modernization</li>
              <li>Cloud optimization</li>
              <li>Security</li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Products</h3>
            <ul className="space-y-4 text-sm">
              <li>AI-DataLens</li>
              <li>EmbedFAST</li>
              <li>CertyFAST</li>
              <li>LoadFAST</li>
              <li>MigrateFAST</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-4 text-sm">
              <li>Case Studies</li>
              <li>Consulting offers</li>
              <li>Power BI custom visual guide</li>
              <li>Best practice guides</li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">About us</h3>
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
      </div>
    </footer>
  );
}
