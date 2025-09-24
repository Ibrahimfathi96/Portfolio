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

  // Function to check if title needs marquee
  const checkTitleWidth = (title) => {
    return title.length > 18;
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
            const needsMarquee = checkTitleWidth(item.projectTitle);

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
                <img src={item.imagePath} alt={item.projectTitle} />

                <div className="box">
                  <div
                    className="flex"
                    style={{
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "8px",
                      gap: "10px",
                    }}
                  >
                    <h1
                      className={`title ${needsMarquee ? "title-marquee" : ""}`}
                    >
                      <span className="title-content">{item.projectTitle}</span>
                    </h1>
                    <span className={`status-badge ${statusBadge.class}`}>
                      {statusBadge.text}
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

                  {/* Dashboard Link - Separate Row */}
                  {item.googleDrive && (
                    <div className="flex dashboard-link">
                      <a
                        href={item.googleDrive}
                        target="_blank"
                        rel="noreferrer"
                        className="flex google-drive"
                      >
                        <div className="icon icon-google-drive"></div>
                        <span>Dashboard</span>
                      </a>
                    </div>
                  )}

                  {/* Store Links Row */}
                  <div className="flex all-icons">
                    {item.appStore && (
                      <a
                        href={item.appStore}
                        target="_blank"
                        rel="noreferrer"
                        className="flex app-store"
                      >
                        <span style={{ fontSize: "1.2rem" }}>🍎</span>
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
                        <span style={{ fontSize: "1.2rem" }}>📱</span>
                        <span>Google Play</span>
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
