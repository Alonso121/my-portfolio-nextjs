import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alison Tahiri Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="home">
          <h2>Hi! My Name Is</h2>
          <h1 className="home__name">
            Alison <span className="home__name--last">Tahiri</span>
          </h1>
          <h2>I'm a Full Stack Web Developer</h2>
          <footer>&copy; Copyright 2021</footer>
        </section>
      </main>


    </div>
  );
}
