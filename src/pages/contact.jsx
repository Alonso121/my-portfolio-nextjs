import Head from "next/head"
const Contact = () => {
    return (
        <div>
         <Head>
            <title>My contact page</title>
            <meta
              name="description"
              content="Hey guys. Here are my contact details. Let's discuss our next project or simply say hi!"
            />
          </Head>   

    <main>
      <section className="contact">
        <h2>Let's get in touch:</h2>

        <ul className="contact__list">
          <li>
            <i className="fas fa-envelope"></i> Email
            <div className="text-secondary"><a href="mailto:alison.tahiri@gmail.com">alison.tahiri@gmail.com</a></div>
          </li>
          <li>
            <i className="fas fa-mobile-alt"></i> Phone
            <div className="text-secondary">+355 69 23 10 911</div>
          </li>
          <li>
            <i className="fas fa-marker-alt"></i> Address
            <div className="text-secondary">Gramoz Pashko St., Tirana, Albania</div>
          </li>
        </ul>
      </section>
        <footer>&copy; Copyright 2021</footer>
    </main>

        </div>
    )
}

export default Contact
