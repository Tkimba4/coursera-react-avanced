import "./assets/styles/global.scss";
import { portfolio } from "./data";
import ContactForm from "./components/Form";
import SocialsNetwork from "./components/SocialsNetwork";
import Project from "./components/Project";

function App() {
  const scrolling = (e) => {
    e.preventDefault();
    const view = e.currentTarget.getAttribute("href");
    console.log(view);
    
    document
      .querySelector(view)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const links = ["home", "projects", "contact"];
  return (
    <div className="App">
      <nav>
        <div className="container">
          <SocialsNetwork />
          <ul className="quicks-link">
            {links.map((link) => (
              <li key={link}>
                <a href={`#${link}`} onClick={scrolling}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <main>
        <section id="home" className="home">
          <div className="container">
            <div className="avatar">
              <div className="img">
                <img src="img/avatar.jpg" alt="Terra kimba" />
              </div>
            </div>
            <div className="bio">
              <p>Hi, I'm</p>
              <h1>Terra Kimba</h1>
              <h3>Web developper</h3>
              <div className="skills">
                <ul className="">
                  <li>
                    <i
                      class="fa-brands fa-html5 fa-3x"
                      style={{ color: "#E34F26" }}
                    ></i>
                  </li>
                  <li>
                    <i
                      class="fa-brands fa-css3-alt fa-3x"
                      style={{ color: "#1572B6" }}
                    ></i>
                  </li>
                  <li>
                    <i
                      class="fa-brands fa-js fa-3x"
                      style={{ color: "#F7DF1E" }}
                    ></i>
                  </li>
                  <li>
                    <i
                      class="fa-brands fa-git fa-3x"
                      style={{ color: "#F05032" }}
                    ></i>
                  </li>
                  <li>
                    <i
                      class="fa-brands fa-react fa-3x"
                      style={{ color: "#61DAFB" }}
                    ></i>
                  </li>
                  <li>
                    <i
                      class="fa-brands fa-node-js fa-3x"
                      style={{ color: "#339933" }}
                    ></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="projects">
          <div className="container">
            <h2 className="title">My Projects</h2>
            <div className="content">
              {portfolio.map((project) => (
                <Project key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="container">
            <h2 className="title">Contact me</h2>
            <div className="content">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <SocialsNetwork />
          <p>©{new Date().getFullYear()} Tkimba4 - Developpeur web.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
