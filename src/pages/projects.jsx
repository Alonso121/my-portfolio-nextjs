import Link from "next/link"
import Head from 'next/head'
const Projects = () => {
    return (
        <div>
          <Head>
            <title>My Projects</title>
            <meta
              name="description"
              content="Here are my personal projects. Feel free to have a look at them!"
            />
          </Head>
            <main>
            <section className="projects">
              <div className="projects__bio-image">
                <h1 className="text-secondary">My Personal Projects</h1>
              </div>

              <div className="projects__items">
              <div className="projects__item">
                  <img src="img/recipe-finder.jpg" alt="Recipe-finder Project" />
                  <div className="projects__btns">
                    <a
                      href="https://my-awesome-recipe-finder.netlify.app"
                      target="_blank"
                      className="projects__btn"
                    >
                      <i className="fas fa-eye"></i> Preview
                    </a>
                    <a
                      href="https://github.com/Alonso121/recipes-app"
                      target="_blank"
                      className="projects__btn"
                    >
                      <i className="fab fa-github"></i> Github
                    </a>
                  </div>
                </div>
                
                <div className="projects__item">
                  <img src="img/Simple-Task-App.png" alt="Simple-Task-App Project" />
                  <div className="projects__btns">
                    <a
                      href="https://the-simple-task.herokuapp.com/signin"
                      className="projects__btn"
                      target="_blank"
                    >
                      <i className="fas fa-eye"></i> Preview
                    </a>
                    <a
                      href="https://github.com/Alonso121/Simple-Task"
                      className="projects__btn"
                      target="_blank"
                    >
                      <i className="fab fa-github"></i> Github
                    </a>
                  </div>
                </div>
                
                <div className="projects__item">
                  <img src="img/instagraham.jpg" alt="Instagraham Project" />
                  <div className="projects__btns">
                    <a
                      href="https://the-instagraham.herokuapp.com"
                      target="_blank"
                      className="projects__btn"
                    >
                      <i className="fas fa-eye"></i> Preview
                    </a>
                    <a
                      href="https://github.com/Alonso121/The-InstaGraham"
                      target="_blank"
                      className="projects__btn"
                    >
                      <i className="fab fa-github"></i> Github
                    </a>
                  </div>
                </div>
                <div className="projects__item">
                  <img src="img/jamming.jpg" alt="Jamming Project" />
                  <div className="projects__btns">
                    <a
                      href="https://alonsos-jamming.surge.sh"
                      className="projects__btn"
                      target="_blank"
                    >
                      <i className="fas fa-eye"></i> Preview
                    </a>
                  </div>
                </div>
                <div className="projects__item">
                  <img src="img/flexbox-site.jpg" alt="My flexbox-site Project" />
                  <div className="projects__btns">
                    <a
                      href="https://6058b42539397c00d6f56dfa--determined-neumann-a69a3c.netlify.app"
                      target="_blank"
                      className="projects__btn"
                    >
                      <i className="fas fa-eye"></i> Preview
                    </a>
                    <a
                      href="https://github.com/Alonso121/flexboxBusinessSite"
                      className="projects__btn"
                      target="_blank"
                    >
                      <i className="fab fa-github"></i> Github
                    </a>
                  </div>
                </div>
                <div className="projects__item">
                  <img src="img/tea-cozy.jpg" alt="tea-cozy Project" />
                  <div className="projects__btns">
                    <a
                      href="https://hungry-kowalevski-a36c43.netlify.app"
                      className="projects__btn"
                    >
                      <i className="fas fa-eye"></i> Preview
                    </a>
                    <a
                      href="https://github.com/Alonso121/teaCozyProject"
                      className="projects__btn"
                      target="_blank"
                    >
                      <i className="fab fa-github"></i> Github
                    </a>
                  </div>
                </div>
                
              </div>
              <Link href="">
        <div className="to-top">
            <img src="img/back-to-top.png" alt="back to top" />
        </div>
        </Link>
              <footer>&copy; Copyright 2021</footer>
            </section>
          </main>
        </div>
    )
}

export default Projects
