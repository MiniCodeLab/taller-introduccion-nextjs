import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js | MiniCodeLab</title>
        <meta
          name="description"
          content="Taller de introducción a Next.js | MiniCodeLab"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Introducción a NextJS - MiniCodeLab</h1>

        <a href="https://www.minicodelab.dev">Link a la web</a>
      </main>
    </div>
  );
}
