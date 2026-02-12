import { Mail } from "lucide-react";
import Community from "../components/Community";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Services from "../components/Services";
import MailToCta from "../components/MailToCta";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Community />
      <MailToCta />
      <Footer />
    </>
  );
}
