import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nicolas Rivera - Links</title>
        <meta name="description" content="Bio and social links for developer Nicolas Rivera - @NicRiv" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Section: Bio */}
      <section className={styles.bio}>
        <header>
          <h1 className={styles.title}>Nicolas Rivera</h1>
          <p className={styles.username}>@NicRiv</p>
          <article className={styles.description}>
            <p>I'm a full stack developer; core skills:</p>
            <p>Laravel, MySQL, React, NextJs, Node, MongoDB.</p>
            <p><i>Check out my links</i></p>
            <p><small>I also develop in C++ and Python</small></p>
          </article>
        </header>
      </section>

      {/* Section: Social Links */}
      <section className={styles.sociallinks}>
        <main>
          <ul>
            <li>
              <a href='https://www.linkedin.com/in/nicolas-rivera-a-wd/' target="_blank">
                <img src='/icons/linkedin.png' alt="LinkedIn Icon" />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href='https://twitter.com/NicRiv_' target="_blank">
                <img src='/icons/twitter.png' alt="Twitter Icon" />
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a href='https://github.com/NicRiv' target="_blank">
                <img src='/icons/github.png' alt="GitHub Icon" />
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a href='https://exercism.org/profiles/NicRiv' target="_blank">
                <img src='/icons/exercism.png' alt="Exercism Icon" />
                <span>Exercism Profile</span>
              </a>
            </li>
            <li>
              <a href='https://www.codewars.com/users/NicRiv' target="_blank">
                <img src='/icons/codewars.svg' alt="Codewars Icon" />
                <span>Codewars Profile</span>
              </a>
            </li>
            <li>
              <a href='https://rosalind.info/users/NicRiv/' target="_blank">
                <img src='/icons/rosalind.png' alt="Rosalind Icon" />
                <span>Rosalind Profile</span>
              </a>
            </li>
          </ul>
        </main>
      </section>
    </div >
  )
}
