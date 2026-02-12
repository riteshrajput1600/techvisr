export default function Navbar() {
  const navLinks = [
    { label: "Services", href: "#" },
    { label: "Products", href: "#" },
    { label: "Partnerships", href: "#" },
    { label: "Resources", href: "#" },
    { label: "About us", href: "#" },
    { label: "Contact us", href: "/contact" },
  ];

  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">
          <span className="text-red-600 font-bold">TechVisr</span>
        </h1>

        <nav className="hidden md:flex gap-8 text-sm text-gray-600">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <details className="relative md:hidden">
          <summary className="list-none cursor-pointer rounded border px-3 py-2 text-sm text-gray-700">
            Menu
          </summary>
          <nav className="absolute right-0 mt-2 w-48 rounded-lg border bg-white p-3 shadow-lg">
            <ul className="flex flex-col gap-2 text-sm text-gray-700">
              {navLinks.map((link) => (
                <li key={`mobile-${link.label}`}>
                  <a className="block rounded px-2 py-1 hover:bg-gray-100" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
