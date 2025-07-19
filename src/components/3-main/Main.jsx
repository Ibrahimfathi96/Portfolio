import React from "react";
import "./main.css";
import { AnimatePresence, motion } from "framer-motion";
import { MyProjects } from "../../data/MyProjects";
const Main = () => {
  const [currentActive, setCurrentActive] = React.useState("professional");
  const [projects, setProjects] = React.useState(
    MyProjects.filter((item) => item.projectType === "professional")
  );
  const onClickHandler = (category) => {
    setCurrentActive(category);
    if (category === "all") {
      setProjects(MyProjects);
    } else if (category === "professional" || category === "educational") {
      const newArr = MyProjects.filter((item) => {
        return item.projectType === category;
      });
      setProjects(newArr);
    } else {
      const newArr = MyProjects.filter((item) => {
        return item.category.includes(category);
      });
      setProjects(newArr);
    }
  };
  return (
    <main id="projects" className="flex">
      <section className="left-section flex">
        <button
          onClick={() => onClickHandler("all")}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>
        <button
          onClick={() => onClickHandler("professional")}
          className={currentActive === "professional" ? "active" : null}
        >
          professional
        </button>
        <button
          onClick={() => onClickHandler("educational")}
          className={currentActive === "educational" ? "active" : null}
        >
          educational
        </button>
        <button
          onClick={() => onClickHandler("Flutter")}
          className={currentActive === "Flutter" ? "active" : null}
        >
          flutter
        </button>
        <button
          onClick={() => onClickHandler("React Native")}
          className={currentActive === "React Native" ? "active" : null}
        >
          react native
        </button>
        <button
          onClick={() => onClickHandler("React Js")}
          className={currentActive === "React Js" ? "active" : null}
        >
          react js
        </button>
        <button
          onClick={() => onClickHandler("Node Js")}
          className={currentActive === "Node Js" ? "active" : null}
        >
          node & express
        </button>
        <button
          onClick={() => onClickHandler("JS / TS")}
          className={currentActive === "JS / TS" ? "active" : null}
        >
          JS & TS
        </button>
        <button
          onClick={() => onClickHandler("HTML & CSS")}
          className={currentActive === "HTML & CSS" ? "active" : null}
        >
          HTML & CSS
        </button>
      </section>

      <section className="right-section flex">
        <AnimatePresence>
          {projects.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{
                  damping: 8,
                  type: "spring",
                  stiffness: 50,
                }}
                key={item.id.toString()}
                className="card"
              >
                <img width={266} height={170} src={item.imagePath} alt="" />

                <div style={{ width: "266px" }} className="box">
                  <div
                    className="flex"
                    style={{
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "8px",
                    }}
                  >
                    <h1 className="title">{item.projectTitle}</h1>
                    <span className={`project-badge ${item.projectType}`}>
                      {item.projectType === "professional"
                        ? item.appStore || item.playStore
                          ? "LIVE"
                          : "DEV"
                        : "EDU"}
                    </span>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="tech-stack-tags">
                    {item.category.slice(0, 2).map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="sub-title">{item.projectDescription}</p>

                  {/* Project Stats - Only show for apps with store links */}
                  {(item.appStore || item.playStore) && (
                    <div className="project-stats">
                      <span className="stat">
                        <span className="stat-icon">📱</span>
                        <span className="stat-text">Mobile App</span>
                      </span>
                      {item.projectType === "professional" && (
                        <span className="stat">
                          <span className="stat-icon">⭐</span>
                          <span className="stat-text">4.5+ Rating</span>
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex all-icons">
                    {item.googleDrive && (
                      <a
                        href={item.googleDrive}
                        target="_blank"
                        rel="noreferrer"
                        className="flex google-drive"
                      >
                        <div className="icon icon-google-drive"></div>
                        <h5>Google Drive</h5>
                      </a>
                    )}
                    {item.appStore && (
                      <a
                        href={item.appStore}
                        target="_blank"
                        rel="noreferrer"
                        className="flex app-store"
                      >
                        <div className="icon icon-apple"></div>
                        <h5>App Store</h5>
                      </a>
                    )}
                    {item.playStore && (
                      <a
                        href={item.playStore}
                        target="_blank"
                        rel="noreferrer"
                        className="flex play-store"
                      >
                        <div className="icon icon-google-play"></div>
                        <h5>Play Store</h5>
                      </a>
                    )}
                    {item.projectType !== "professional" && (
                      <a
                        className="flex github"
                        href={item.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="icon icon-github"></div>
                        <h5>GitHub</h5>
                      </a>
                    )}
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
