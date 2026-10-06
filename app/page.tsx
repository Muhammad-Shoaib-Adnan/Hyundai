import Image from "next/image";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Header2 from "../components/header2/header2";
import Carlineup from "../components/carlineup/carlineup";
import Trending from "../components/trending/trending";
import Press from "../components/press/press";
import Form from "../components/form/form";
import Footer from "../components/footer/footer";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Header2 />
      <Carlineup />
      <Trending />
      <Press />
      <Form />
      <Footer />
    </>
  );
}
