import React from 'react'
import styles from "./styles.css"

function SafeContainer({children}) {
  return (
    <section className={styles.container}>
        {children}
    </section>
  )
}

export default SafeContainer