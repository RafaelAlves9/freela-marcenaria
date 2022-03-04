import Feedbacks from "../components/Feedbacks/Feedbacks";
import NavBar from "../components/NavBar/NavBar";
import Works from "../components/Works/Works";
import AboutUs from "../components/AboutUs/AboutUs";
import Header from "../components/Header/Header";
import Values from "../components/Values/Values";
import Footer from "../components/footer/footer";

export default function Home() {
  return(
    <>
      <NavBar />
      <Header />
      <AboutUs />
      <Works />
      <Values />
      <Feedbacks />
      <Footer />
    </>
  )
}