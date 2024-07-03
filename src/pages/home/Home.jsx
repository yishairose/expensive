import Hero from "./Hero";
import Main from "./Main";
import Footer from "./Footer";
import MainNav from "../../components/MainNav";

function Home() {
  return (
    <>
      <MainNav />
      <Hero />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
