import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Services from "../components/Services";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Products />
    </>
  );
}
