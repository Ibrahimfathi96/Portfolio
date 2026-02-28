import React from "react";
import "./main.css";
import { AnimatePresence, motion } from "framer-motion";
import { MyProjects } from "../../data/MyProjects";
const Main = () => {
  const [currentActive, setCurrentActive] = React.useState("professional");
  const [projects, setProjects] = React.useState(
    MyProjects.filter((item) => item.projectType === "professional"),
  );
  const [expandedId, setExpandedId] = React.useState(null);

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

  const getStatusBadge = (item) => {
    if (item.projectType === "educational") {
      return { text: "EDU", class: "edu" };
    }
    return item.appStore || item.playStore
      ? { text: "LIVE", class: "live" }
      : { text: "DEV", class: "dev" };
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
            const statusBadge = getStatusBadge(item);

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
                <div className="card-img-wrapper">
                  <img src={item.imagePath} alt={item.projectTitle} />
                  <span className={`status-badge ${statusBadge.class}`}>
                    {statusBadge.text}
                  </span>
                </div>

                <div className="box">
                  <h1 className="title">{item.projectTitle}</h1>

                  <div className="tech-stack-tags">
                    {item.category.slice(0, 3).map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p
                    className={`sub-title ${expandedId === item.id ? "expanded" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedId(expandedId === item.id ? null : item.id);
                    }}
                    title="Click to read more"
                  >
                    {item.projectDescription}
                  </p>

                  <div className="flex all-icons">
                    {item.appStore && (
                      <a
                        href={item.appStore}
                        target="_blank"
                        rel="noreferrer"
                        className="flex app-store"
                      >
                        <span className="store-icon">🍎</span>
                        <span>App Store</span>
                      </a>
                    )}
                    {item.playStore && (
                      <a
                        href={item.playStore}
                        target="_blank"
                        rel="noreferrer"
                        className="flex play-store"
                      >
                        <span className="store-icon">▶️</span>
                        <span>Play Store</span>
                      </a>
                    )}
                    {item.googleDrive && (
                      <a
                        href={item.googleDrive}
                        target="_blank"
                        rel="noreferrer"
                        className="flex google-drive"
                      >
                        <div className="icon icon-google-drive"></div>
                        <span>Dashboard</span>
                      </a>
                    )}
                    {item.projectType !== "professional" && item.github && (
                      <a
                        className="flex github"
                        href={item.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="icon icon-github"></div>
                        <span>GitHub</span>
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
