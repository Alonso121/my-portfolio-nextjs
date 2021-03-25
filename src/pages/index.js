import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alison Tahiri Portfolio</title>
        <meta
          name="description"
          content="Hey! I am Alison Tahiri. Welcome to the landing page of my personal website!"
        />
        <meta
          name="google-site-verification"
          content="-lJNVr3o0jZMLkp20jI4Ker-ZayzmMgzvw9LuaeLO8c"
        />
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
