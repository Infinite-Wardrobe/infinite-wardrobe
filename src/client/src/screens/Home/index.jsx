import React from 'react'
import * as Components from "../../components"
import styles from "./styles.module.css"
import Dress from "../../assets/dress.jpeg"

function Home() {
  return (
    <Components.SafeContainer>
      <div className={styles.cards_container}>
       {Array(20).fill(0).map((_) => { return <Components.Card imgUrl={Dress} title={"Dress"}/>})}
        
      </div>
    </Components.SafeContainer>
  )
}

export default Home