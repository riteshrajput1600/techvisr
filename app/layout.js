import "./globals.css";

export const metadata = {
  title: "Techvisr | Software Development, AI & Quality Engineering Services",
  description:
    "Techvisr provides end-to-end software development, AI research, product engineering, DevOps, and quality assurance services to startups and enterprises worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
