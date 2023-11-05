import React from 'react'
import styles from "./styles.module.css"
import Camera from "../../assets/camera.png"
import Dress from "../../assets/dress.png"

function Bottombar() {

  return (
    <section className={styles.container}>
      <img src={Dress} className={styles.icon}/>
      <img src={Camera} className={styles.icon}/>


    </section>
  )
}

export default Bottombar