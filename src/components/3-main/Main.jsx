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
                        <svg
                          className="store-icon"
                          viewBox="0 0 32 32"
                          fill="currentColor"
                        >
                          <path d="M20.411 5.79c0.98-1.14 1.576-2.634 1.576-4.267 0-0.183-0.007-0.364-0.022-0.542l0.002 0.023c-1.769 0.18-3.314 1.019-4.407 2.264l-0.007 0.008c-0.997 1.107-1.607 2.579-1.607 4.194 0 0.157 0.006 0.314 0.017 0.468l-0.001-0.021c0.017 0 0.037 0 0.058 0 1.774 0 3.356-0.826 4.381-2.115l0.009-0.011zM16.19 9.622c-1.185 0-3.018-1.347-4.949-1.3-2.661 0.073-4.959 1.558-6.18 3.73l-0.019 0.037c-2.646 4.592-0.682 11.375 1.898 15.108 1.266 1.817 2.759 3.861 4.739 3.798 1.899-0.081 2.612-1.233 4.917-1.233 2.288 0 2.937 1.233 4.949 1.185 2.046-0.032 3.344-1.849 4.594-3.684 0.848-1.227 1.554-2.641 2.044-4.152l0.032-0.115c-2.38-1.033-4.016-3.359-4.024-6.068v-0.001c0.023-2.406 1.304-4.507 3.216-5.68l0.029-0.017c-1.24-1.741-3.221-2.884-5.473-2.969l-0.013-0c-2.499-0.195-4.592 1.362-5.761 1.362z" />
                        </svg>
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
                        <svg
                          className="store-icon"
                          viewBox="0 0 32 32"
                          fill="currentColor"
                        >
                          <path d="M17.929 17.32l-13.746 13.662c0.067 0.009 0.144 0.014 0.223 0.014 0.335 0 0.648-0.090 0.918-0.247l-0.009 0.005 16.65-9.422zM17.929 14.737l4.071-4.046-16.685-9.442c-0.262-0.153-0.577-0.244-0.913-0.244-0.095 0-0.188 0.007-0.28 0.021l0.010-0.001zM2.675 2.159c-0.089 0.209-0.14 0.452-0.14 0.707 0 0.001 0 0.002 0 0.003v-0 26.264c0 0.002 0 0.003 0 0.005 0 0.269 0.057 0.525 0.16 0.756l-0.005-0.012 13.94-13.855zM28.519 17.622l-4.897 2.772-4.393-4.365 4.427-4.4 4.862 2.752c0.569 0.326 0.945 0.929 0.945 1.621s-0.377 1.295-0.936 1.616l-0.009 0.005z" />
                        </svg>
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
