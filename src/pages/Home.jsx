import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Library from "../components/Library";
import Courses from "../components/Courses";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
      <Library />
      <Footer />
    </>
  );
};

export default Home;