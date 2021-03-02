import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Title, Main } from "../components/layout";
import { Watermark } from "../components/Watermark";

export default function Home() {
  return (
    <div className={"container"}>
      <Head>
        <title>Как решать ЕГЭ?</title>
        <link rel="icon" href="/ax.svg" />
      </Head>

      <Main horizontalAlign="center">
        <Title>
          Как решать <a href="https://fipi.ru/ege">ЕГЭ?</a>
        </Title>

        <p className={styles.description}>
          Начни с задач по{" "}
          <code className={styles.code}>Информатике и ИКТ</code>
        </p>

        <div className={styles.grid}>
          <Link href="/explanations/logic-equation">
            <a className={styles.card}>
              <h3>Логика &rarr;</h3>
              <p>Научись упрощать сложные уравнения и решать 2 задачу!</p>
            </a>
          </Link>

          <Link href="/explanations/strategy">
            <a className={styles.card}>
              <h3>Стратегия &rarr;</h3>
              <p>Научись решать задачи 19-21 на стратегию!</p>
            </a>
          </Link>
        </div>
      </Main>

      <Watermark />
    </div>
  );
}
