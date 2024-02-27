import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Blog</div>
      <div className={styles.text}>
        Blog agency © All rights reserved
      </div>
    </div>
  )
}

export default Footer