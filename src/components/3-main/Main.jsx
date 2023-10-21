import "./main.css";
const Main = () => {
  return (
    <main className="flex">
      <section className="left-section flex">
        <button className="active">all projects</button>
        <button>flutter</button>
        <button>react native</button>
        <button>react js</button>
        <button>node & express</button>
        <button>HTML & CSS</button>
      </section>
      <section className="right-section flex">
        {["aa", "bb", "cc", 1, 7].map((item) => {
          return (
            <article key={item} className="card">
              <img width={266} src="./1.jpg" alt="" />

              <div style={{ width: "266px" }} className="box">
                <h1 className="title">Project Title</h1>
                <p className="sub-title">
                  lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque necessitatibus quidem, voluptatem quibusdam,
                  adipisci eum doloribus quia, voluptate quas quod? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Doloremque
                  necessitatibus.
                </p>
                <div className="flex all-icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon icon-link"></div>
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
