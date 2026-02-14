import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Partnerships", href: "#community" },
    { label: "Resources", href: "#community" },
    { label: "About us", href: "#about" },
    { label: "Contact us", href: "/contact" },
  ];

  return (
    <nav
      aria-label="Navigation Bar"
      data-testid="pv-navigation-bar"
      className="fixed left-0 top-0 z-50 block h-[66px] w-full px-4 sm:px-6 [font-family:'Amazon_Ember','Amazon_Arabic_Ember',Arial,sans-serif]"
    >
      <div
        id="pv-nav-container"
        data-testid="desktop-nav-wrapper"
        className="relative mx-auto h-[66px] w-full max-w-7xl"
      >
        <div
          data-testid="desktop-nav"
          className="relative flex h-[66px] items-center justify-between overflow-visible rounded-none border-0 px-4 text-white shadow-none sm:px-5 md:rounded-b-[12px] md:border md:border-cyan-300/30 md:border-t-0 md:px-[21px] md:shadow-[0_0_18px_rgba(34,211,238,0.22),0_4px_4px_rgba(0,0,0,0.3),0_8px_12px_6px_rgba(0,0,0,0.15)] md:overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 backdrop-blur-[16px]" />

          <Link href="/" aria-label="TechVisr home" className="block">
            <Image
              src="/images/logo.png"
              alt="TechVisr"
              width={140}
              height={36}
              className="h-9 w-auto sm:h-10"
              priority
            />
          </Link>

          <div className="hidden md:block">
            <ul className="flex items-center gap-1 text-[15px] text-white/85">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`rounded-md px-3 py-2 transition-colors ${
                      link.href === "/contact"
                        ? "inline-flex items-center justify-center rounded-md bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
                        : "hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <details className="relative md:hidden">
            <summary className="list-none cursor-pointer rounded-md border border-white/25 bg-white/10 px-3 py-2 text-sm font-medium text-white">
              <span className="sr-only">Open menu</span>
              <span aria-hidden="true">Menu</span>
            </summary>
            <div className="absolute right-0 mt-2 w-60 rounded-xl border border-white/15 bg-[rgba(25,30,37,0.95)] p-3 shadow-xl backdrop-blur-md">
              <ul className="flex flex-col gap-1 text-sm text-white/90">
                {navLinks.map((link) => (
                  <li key={`mobile-${link.label}`}>
                    <Link
                      className={`block rounded-md px-2.5 py-2 transition-colors ${
                        link.href === "/contact"
                          ? "bg-red-500 text-white hover:bg-red-400"
                          : "hover:bg-white/10 hover:text-white"
                      }`}
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}
