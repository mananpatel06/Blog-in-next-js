import Image from 'next/image'
import styles from './about.module.css'

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About Agency</h2>
        <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better.</h1>
        <p className={styles.desc}>We create digital ideas that are bigger, bolder, braver and better. 
        We have worlds best consulting team.</p>

        <div className={styles.boxes}>

        <div className={styles.box}>
          <h1>10 +</h1>
          <p>Years of experience</p>
        </div>

        <div className={styles.box}>
          <h1>8k +</h1>
          <p>Project completed</p>
        </div>

        <div className={styles.box}>
          <h1>3k +</h1>
          <p>Satisfied clients</p>
        </div>

        </div>

      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" fill className={styles.img} alt='about image' />
      </div>
    </div>
  )
}

export default AboutPage