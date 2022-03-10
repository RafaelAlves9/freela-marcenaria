import Carousel from "../components/Carousel/Carousel";
import NavBar from "../components/NavBar/NavBar";
import Works from "../components/Works/Works";
import AboutUs from "../components/AboutUs/AboutUs";
import Header from "../components/Header/Header";
import Values from "../components/Values/Values";
import Footer from "../components/footer/footer";
import ButtonFixed from "../components/ButtonFixed.jsx/Button";
import Description from "../components/Description/Description";

export default function Home() {
  return(
    <>
      <NavBar />
      <Header />
      <AboutUs />
      <Works />
      <Description />
      <Values />
      <Carousel />
      <Footer />
      <ButtonFixed />
    </>
  )
}