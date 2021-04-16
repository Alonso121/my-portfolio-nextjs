import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
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
                  <div className="projects__item__img">
                    <Image src="/img/dardha.png" alt="Dardha-al website" layout="fill" priority />
                  </div>
                  <div className="projects__btns">
                    <a
                      href="https://dardha.al/"
                      className="projects__btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fas fa-eye"></i> Preview
                    </a>
                  </div>
                  <p className="projects__description">Full stack e-commerce project made with Next-js, Strapi, Mongo DB, Snipcart and Tailwind css. Git repo is private.</p>
                </div>

              <div className="projects__item">
                  <div className="projects__item__img">
                    <Image src="/img/recipe-finder.png" alt="Recipe-finder Project" layout="fill" priority />
                  </div>
                  <div className="projects__btns">
                    <a
                      href="https://my-awesome-recipe-finder.netlify.app"
                      target="_blank"
                      className="projects__btn"
                      rel="noreferrer"
                    >
                      <i className="fas fa-eye"></i> Preview
                    </a>
                    <a
                      href="https://github.com/Alonso121/recipes-app"
                      target="_blank"
                      className="projects__btn"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github"></i> Github
                    </a>
                  </div>
                  <p className="projects__description">Simple React App which calls a recipe API based on user specifications.</p>
                </div>
                
                <div className="projects__item">
                  <div className="projects__item__img">
                    <Image src="/img/Simple-Task-App.png" alt="Simple-Task-App Project" layout="fill" priority />
                  </div>
                  <div className="projects__btns">
                    <a
                      href="https://the-simple-task.herokuapp.com/signin"
                      className="projects__btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fas fa-eye"></i> Preview
                    </a>
                    <a
                      href="https://github.com/Alonso121/Simple-Task"
                      className="projects__btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github"></i> Github
                    </a>
                  </div>
                  <p className="projects__description">Tasks organizer React + ExpressJs App integrated with Mongo DB to save Tasks on the go. Let 30s to load preview.</p>
                </div>
                
                

                <div className="projects__item">
                  <div className="projects__item__img">
                    <Image src="/img/flexbox-site.png" alt="My flexbox-site Project" layout="fill" priority />
                  </div>
                  <div className="projects__btns">
                    <a
                      href="https://6058b42539397c00d6f56dfa--determined-neumann-a69a3c.netlify.app"
                      target="_blank"
                      className="projects__btn"
                      rel="noreferrer"
                    >
                      <i className="fas fa-eye"></i> Preview
                    </a>
                    <a
                      href="https://github.com/Alonso121/flexboxBusinessSite"
                      className="projects__btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github"></i> Github
                    </a>
                  </div>
                  <p className="projects__description">My first responsive website with HTML and CSS with unoptimized images. New version comming soon!</p>
                </div>

                <div className="projects__item">
                  <div className="projects__item__img">
                    <Image src="/img/instagraham.png" alt="Instagraham Project" layout="fill" priority />
                  </div>
                  <div className="projects__btns">
                    <a
                      href="https://the-instagraham.herokuapp.com"
                      target="_blank"
                      className="projects__btn"
                      rel="noreferrer"
                    >
                      <i className="fas fa-eye"></i> Preview
                    </a>
                    <a
                      href="https://github.com/Alonso121/The-InstaGraham"
                      target="_blank"
                      className="projects__btn"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github"></i> Github
                    </a>
                  </div>
                  <p className="projects__description">Basic copy of Instagram to learn about database integration and authentication. (React + Express JS + MongoDB). Let 30s to load preview.</p>
                </div>

                <div className="projects__item">
                  <div className="projects__item__img">
                    <Image src="/img/portfolio.png" alt="my portfolio" layout="fill" priority />
                  </div>
                  <div className="projects__btns">
                    <a
                      href="https://github.com/Alonso121/my-portfolio-nextjs"
                      className="projects__btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github"></i> Github
                    </a>
                  </div>
                  <p className="projects__description">My first portfolio version made with Next JS and Sass. Github link to source code.</p>
                </div>
                
              </div>
              <Link href="">
                <div className="to-top">
                  <Image src="/img/back-to-top.png" alt="back to top" layout="fill" />
                </div>
              </Link>
              <footer>&copy; Copyright 2021</footer>
            </section>
          </main>
        </div>
    )
}

export default Projects
