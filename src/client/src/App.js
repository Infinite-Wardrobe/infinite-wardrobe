import React from 'react';
import * as Screens from "./screens"
import * as Components from "./components"

function App() {
  return (
    <Components.SafeContainer>
      <Components.Navbar/>
      
      <Components.Bottombar/>
    </Components.SafeContainer>
  );
}

export default App;
