import React from 'react'
import styles from "./styles.module.css"
import { useLocation } from 'react-router-dom';

function Bottombar() {
  let location = useLocation();

  return (
    <section className={styles.container}>
      <div className={styles.button}>
        <h1 className={styles.button_text}>Wardrobe</h1>
        {location.pathname == "/" && <div className={styles.button_active}/>}
        </div>
      <div className={styles.button}>
        <h1 className={styles.button_text}>Camera</h1>
        {location.pathname == "/upload" && <div className={styles.button_active}/>}
        </div>
    </section>
  )
}

export default Bottombar