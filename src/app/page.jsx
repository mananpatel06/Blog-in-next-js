import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";

const Home = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
        We create digital ideas that are bigger, bolder, braver and better. We have worlds best blog consulting team.
        </p>

        <div className={styles.buttons}>
          <Link href="/about">
            <button className={styles.button1}>Learn More </button>
          </Link>
          <Link href="/contact">
            <button className={styles.button}>Contact</button>
          </Link>
        </div>

        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/blog.png" alt="" fill className={styles.heroImg} />
      </div>
    </div>
    <br />
    <br />
    <AboutPage />
    <br />
    <br />
    <ContactPage />
    </>
  );
};

export default Home;
