import React from 'react'
import styles from './navbar.module.css'
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>LOGO</div>
      <div className={styles.logo}>zionttsang</div>
      <div className={styles.menu}>
        <Link href='/'>Home</Link>
        <Link href='/'>Contact</Link>
        <Link href='/'>About</Link>
      </div>
    </div>
  )
}

export default Navbar