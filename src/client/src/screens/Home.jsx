import React from 'react'
import * as Components from "../components"

function Home() {
  return (
    <Components.SafeContainer>
      <Components.Navbar/>
    </Components.SafeContainer>
  )
}

export default Home