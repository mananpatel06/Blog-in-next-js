import Image from 'next/image'
import styles from './contact.module.css'

const ContactPage = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.imgContainer}>
        <Image src="/contact.png" className={styles.img} alt='contact image' fill />
      </div>

      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder='Full name'/>
          <input type="email" placeholder='Email address'/>
          <input type="number" placeholder='Phone number'/>
          <textarea name="" id="" placeholder='Message' cols="30" rows="10"></textarea>
          <button>Send</button>
        </form>
      </div>

    </div>
  )
}

export default ContactPage