import "./globals.css";

export const metadata = {
  title: "Techvisr - AI-powered Fabric migration solutions",
  description: "AI-powered Fabric migration solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
