import React, { useEffect, useState } from "react";
import "./main.css";
import { AnimatePresence, motion } from "motion/react";
import { myProjects } from "./data";
import { ToastContainer, toast, Bounce } from "react-toastify";

const Main = () => {
  const [arr, setArr] = useState(myProjects);
  const [currentActive, setCurrentActive] = useState("all");
  const notify = () => toast.info("Oops! site under maintenance");
  const [theme, setTheme] = useState(localStorage.getItem("currentMode"));

  useEffect(() => {
    setTheme(localStorage.getItem("currentMode"));
  });

  const handleFilter = (buttonCat) => {
    setCurrentActive(buttonCat);
    const newArr = myProjects.filter((item) => {
      const cat = item.category.find((i) => i === buttonCat);
      return buttonCat === "all" || cat === buttonCat;
    });
    setArr(newArr);
  };
  const handleLinkClick = (e, link) => {
    if (!link || link.trim() === "") {
      e.preventDefault();
      notify();
    }
  };

  return (
    <main className="flex">
      <section className="left-section flex">
        <button
          onClick={() => {
            setCurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            handleFilter("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React & MUI
        </button>
        <button
          onClick={() => {
            handleFilter("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleFilter("bootstrap");
          }}
          className={currentActive === "bootstrap" ? "active" : null}
        >
          React Bootstrap 5
        </button>
        <button
          onClick={() => {
            handleFilter("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        {/* <button
          onClick={() => {
            handleFilter("node");
          }}
          className={currentActive === "node" ? "active" : null}
        >
          Node & Express
        </button> */}
      </section>
      <section className="right-section flex">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          draggable
          pauseOnHover
          theme={theme}
          transition={Bounce}
        />
        <AnimatePresence>
          {arr.map((item, index) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 10, stiffness: 100 }}
                key={index}
                className="card"
              >
                <a
                  href={item.linkProject}
                  onClick={(e) => handleLinkClick(e, item.linkProject)}
                >
                  <img width={266} src={item.imgPath} alt="Card Image" />
                </a>
                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">{item.description}</p>
                  <div className="flex icons">
                    <div className="flex">
                      <a target="_blank" href={item.linkGit}>
                        <div className="icon-github"></div>
                      </a>
                    </div>
                    <a
                      className="link flex"
                      target="_blank"
                      href={item.linkProject}
                      onClick={(e) => {
                        handleLinkClick(e, item.linkProject);
                      }}
                    >
                      View <span className="icon-long-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
