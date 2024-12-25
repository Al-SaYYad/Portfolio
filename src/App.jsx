import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/1-header/Header";
import Hero from "./Components/2-hero/Hero";
import Main from "./Components/3-main/Main";
import Contact from "./Components/4-contact/Contact";
import Footer from "./Components/5-footer/Footer";

function App() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setScroll(true) : setScroll(false);
    });
  }, []);
  return (
    <div id="up" className="App container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      <a style={{ opacity: scroll ? 1 : 0, transition: "0.3s" }} href="#up">
        <button className="scroll2Top icon-keyboard_arrow_up" />
      </a>
    </div>
  );
}

export default App;
