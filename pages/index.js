import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nicolas Rivera - Links</title>
        <meta name="description" content="Bio and social links for developer Nicolas Rivera - @NicRiv" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Section: Bio */}
      <section className={styles.bio}>
        <header>
          <h1 className={styles.title}>Nicolas Rivera</h1>
          <p className={styles.username}>@NicRiv</p>
          <article className={styles.description}>
            <p>I&apos;m a full stack developer; core skills:</p>
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
              <a href='https://www.linkedin.com/in/nicolas-rivera-a-wd/' target="_blank" rel="noopener noreferrer">
                <Image src='/icons/linkedin.png' alt="LinkedIn Icon" width={20} height={20}  />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href='https://twitter.com/NicRiv_' target="_blank" rel="noopener noreferrer">
                <Image src='/icons/twitter.png' alt="Twitter Icon" width={20} height={20} />
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a href='https://github.com/NicRiv' target="_blank" rel="noopener noreferrer">
                <Image src='/icons/github.png' alt="GitHub Icon" width={20} height={20} />
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a href='https://exercism.org/profiles/NicRiv' target="_blank" rel="noopener noreferrer">
                <Image src='/icons/exercism.png' alt="Exercism Icon" width={20} height={20} />
                <span>Exercism Profile</span>
              </a>
            </li>
            <li>
              <a href='https://www.codewars.com/users/NicRiv' target="_blank" rel="noopener noreferrer">
                <Image src='/icons/codewars.svg' alt="Codewars Icon" width={20} height={20} />
                <span>Codewars Profile</span>
              </a>
            </li>
            <li>
              <a href='https://rosalind.info/users/NicRiv/' target="_blank" rel="noopener noreferrer">
                <Image src='/icons/rosalind.png' alt="Rosalind Icon" width={20} height={20} />
                <span>Rosalind Profile</span>
              </a>
            </li>
          </ul>
        </main>
      </section>
    </div >
  )
}
