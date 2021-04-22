import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'

const About = () => {
    return (
        <div>
            <Head>
            <title>About me</title>
            <meta
              name="description"
              content="Here is a brief description of my professional life. Check it out, something might interest you!"
            />
          </Head>
    <main>
      <section className="about">
        <div className="bio">
          <div className="about__bio">
            <img
              className="about__bio-image"
              src="img/alison-foto.png"
              alt="My own picture"
            />
            <p>
              I'm a Tirana based Web Developer. I am a former Business Manager
              with an absolute love for coding. I have a strong commitment in
              learning new things and challenge myself with new technologies.
            </p>
          </div>
        </div>

        <div className="languages">
          <h1 className="text-secondary">Languages and frameworks I use:</h1>
          <div className="languages__pic-container">
            <figure>
              <div className="img">
              <Image src="/img/html-5.png" alt="html5 icon" layout="fill" objectFit="contain" />
              </div>
              <figcaption>HTML</figcaption>
            </figure>
            <figure>
              <div className="img">
              <Image src="/img/css.png" alt="css icon" layout="fill" objectFit="contain"/>
              </div>
              <figcaption>CSS</figcaption>
            </figure>
            <figure>
              <div className="img">
              <Image src="/img/javascript.png" alt="javascript icon" layout="fill" objectFit="contain"/>
              </div>
              <figcaption>Javascript</figcaption>
            </figure>
            <figure>
              <div className="img">
              <Image src="/img/react.png" alt="react icon" layout="fill" objectFit="contain"/>
              </div>
              <figcaption>React</figcaption>
            </figure>
            <figure>
              <div className="img">
              <Image src="/img/node.png" alt="nodejs icon" layout="fill" objectFit="contain"/>
              </div>
              <figcaption>NodeJs</figcaption>
            </figure>
            <figure>
              <div className="img">
              <Image src="/img/mongo.png" alt="mongodb icon" layout="fill" objectFit="contain"/>
              </div>
              <figcaption>MongoDB</figcaption>
            </figure>
          </div>
        </div>

        <div className="edu">
          <h1 className="edu__title">Education</h1>
          <div className="edu__institution">
            <div className="edu__institution__info">
              <h2 className="text-secondary">December 2020</h2>
              <h3>Codecademy</h3>
              <p>
                At Codecademy I learned a great deal about coding. It helped me
                greatly improve my coding skills and recall the foundations of
                web development.
              </p>
            </div>
            <Link href="/img/codecademy.png">
              <div className="img">
            <Image layout="fill" objectFit="contain" src="/img/codecademy.png" alt="Codecademy Diploma" />
              </div>
            </Link>
          </div>
          <div className="edu__institution">
            <div className="edu__institution__info">
              <h2 className="text-secondary">Fundamentals of Digital Marketing</h2>
              <h3>Google Digital Garage</h3>
              <p>
                In this course I learned about different online marketing
                strategies, how to use online search engines or social media
                adds for maximizing our website visits etc.
              </p>
            </div>
            <Link href="/img/google.png">
              <div className="img">
            <Image layout="fill" objectFit="contain" src="/img/google.png" alt="Google diploma" />
              </div>
            </Link>
          </div>
          <div className="edu__institution">
            <div className="edu__institution__info">
              <h2 className="text-secondary">
                Certificate in European Union Projects
              </h2>
              <h3>Metropolitan University Tirana</h3>
              <p>
                This course helped me a great deal with time management,
                structuring and organization of writing projects and team
                collaboration.
              </p>
            </div>
            <Link href="/img/eu-certificate.png">
              <div className="img">
            <Image layout="fill" objectFit="contain" src="/img/eu-certificate.png"
              alt="Metropolitan University Diploma"
            />
              </div>
              
            </Link>
          </div>
          <div className="edu__institution">
            <div className="edu__institution__info">
              <h2 className="text-secondary">Bachelor in Management</h2>
              <h3>Empire State College</h3>
              <p>
                In this institution, I learned about the foundations of
                Management which helped me not only in my professional career
                but also in organizing my other aspects of my life.
              </p>
            </div>
            <Link href="/img/suny.png">
              <div className="img">
            <Image layout="fill" objectFit="contain" src="/img/suny.png" alt="State University Diploma" />
              </div>
            </Link>
          </div>
        </div>

        <hr />

        <div className="jobs">
          <h1 className="jobs__title">Work Experience</h1>
          <div className="jobs__job">
            <h2 className="text-secondary">Century 21</h2>
            <h3>November 2018 - June 2019</h3>
            <h4>Real Estate Agent</h4>
            <p>
              Managed my own clients and properties Portfolio. Responsible for
              marketing in social networks and local websites for my properties.
              Hunting actively for new properties and serving as a mitigator
              between selling and buying parties.
            </p>
          </div>
          <div className="jobs__job">
            <h2 className="text-secondary">Purepro Albania</h2>
            <h3>March 2013 - October 2018</h3>
            <h4>Manager</h4>
            <p>
              Responsible for contacting with the manufacturers for ordering
              products. Dealing with imports and exports on behalf of Purepro
              Albania. Organizing the distribution of water purification
              products and water filters. Arranging the marketing strategy of
              the company. Maintaining the relations with other companies of the
              same industry in Albania and establishing joint collaborations.
            </p>
          </div>
          <div className="jobs__job">
            <h2 className="text-secondary">Purepro Albania</h2>
            <h3>September 2011 - March 2018</h3>
            <h4>Sales team training specialist</h4>
            <p>
              I was responsible for presenting new products to the sales team
              and training them in implementing the company’s marketing
              strategies. Presenting new water filtration products to the
              plumbers and explaining them how to mount new systems.
            </p>
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

export default About
