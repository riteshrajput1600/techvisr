export default function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">
          <span className="text-red-600 font-bold">TechVisr</span>
        </h1>

        <nav className="hidden md:flex gap-8 text-sm text-gray-600">
          <a href="#">Services</a>
          <a href="#">Products</a>
          <a href="#">Partnerships</a>
          <a href="#">Resources</a>
          <a href="#">About us</a>
          <a href="/contact">Contact us</a>
        </nav>
      </div>
    </header>
  );
}
