import React from "react";
import "./main.css";
import { MyProjects } from "../../data/MyProjects";
const Main = () => {
  const [currentActive, setCurrentActive] = React.useState("all");
  const [projects, setProjects] = React.useState(MyProjects);
  const onClickHandler = (category) => {
    setCurrentActive(category);
    if (category === "all") {
      setProjects(MyProjects);
    } else {
      const newArr = MyProjects.filter((item) => {
        return item.category.includes(category);
      });
      setProjects(newArr);
    }
  };
  return (
    <main className="flex">
      <section className="left-section flex">
        <button
          onClick={() => onClickHandler("all")}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
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
          onClick={() => onClickHandler("JavaScript")}
          className={currentActive === "JavaScript" ? "active" : null}
        >
          javaScript
        </button>
        <button
          onClick={() => onClickHandler("HTML & CSS")}
          className={currentActive === "HTML & CSS" ? "active" : null}
        >
          HTML & CSS
        </button>
      </section>

      <section className="right-section flex">
        {projects.map((item) => {
          return (
            <article key={item.id.toString()} className="card">
              <img width={266} src={item.imagePath} alt="" />

              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">{item.projectDescription}</p>
                <div className="flex all-icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon icon-google-drive"></div>
                    <div className="icon icon-github"></div>
                  </div>
                  <a className="link flex" href="">
                    more
                    <span className="icon-arrow-right"></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};
export default Main;
