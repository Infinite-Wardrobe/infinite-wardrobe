import React, { useEffect } from 'react'
import axios from "axios"
import * as Components from "../../components"
import styles from "./styles.module.css"

function Home() {

  let {wardrobeContents, setWardrobeContents} = React.useState([])

  useEffect(() => {
    axios.get("/api/wardrobe", {
      withCredentials: true
    }).then((res) => {
      console.log(res)
      setWardrobeContents(res.data)
    }).catch((err) => {
      console.error(err)
    });

    console.log(wardrobeContents)
  })

  return (
    <Components.SafeContainer>
      <div className={styles.cards_container}>
       { wardrobeContents.forEach(article => { return <Components.Card imgUrl={article.imageString} title={article.class}/>}) }
      </div>
    </Components.SafeContainer>
  )
}

export default Home