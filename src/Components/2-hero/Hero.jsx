import React, { useRef } from "react";
import "./hero.css";
import devAnimation from "../../Animation/dev.json";
import Lottie from "lottie-react";
import { motion } from "motion/react";

const Hero = () => {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            transition={{ damping: 5, type: "spring", stiffness: 100 }}
            animate={{ transform: "scale(1.1)" }}
            src="../../../public/Images/image-profile.webp"
            alt="avatar"
            className="avatar"
          />
          <div className="icon-verified"></div>
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          animate={{ opacity: 1 }}
          className="title"
        >
          Software Designer, Founder, and Amateur Astronaut.
        </motion.h1>
        <p className="sub-title">
          I'm Mahmoud Ali, a software designer and entrepreneur based in New
          York City. I'm the founder and CEO of Planetaria, where we develop
          technologies empower regular people to explore space on their own
          terms.
        </p>
        <div className="icons flex">
          <a
            href="https://www.facebook.com/profile.php?id=100008594496061&locale"
            target="_blank"
            className="icon-facebook"
          ></a>
          {/* <a href="" target="_blank" className="icon-x"></a> */}
          <a
            href="https://www.instagram.com/7oda.al.sayyad/"
            target="_blank"
            className="icon-instagram"
          ></a>
          <a
            href="https://github.com/Al-SaYYad"
            target="_blank"
            className="icon-github"
          ></a>
          <a
            href="https://www.linkedin.com/in/ahmed-ali-0ab422262/"
            target="_blank"
            className="icon-linkedin"
          ></a>
          <a
            href="tel:01097255813"
            target="_blank"
            className="icon-whatsapp"
          ></a>
          <a
            href="https://t.me/Mahmoud_Al_SaYYad"
            target="_blank"
            className="icon-telegram"
          ></a>
        </div>
      </div>
      <div className="right-section animation">
        {/* To Edit https://lottiereact.com/ */}
        <Lottie
          style={{
            borderRadius: "50%",
            backgroundColor: "transparent",
          }}
          animationData={devAnimation}
          lottieRef={lottieRef}
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.8);
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
