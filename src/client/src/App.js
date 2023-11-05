import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Screens from "./screens"
import * as Components from "./components"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Screens.Home />}/>
        <Route path='/upload' element={<Screens.Upload />}/>
      </Routes>
      <Components.Bottombar/>
    </BrowserRouter>
  );
}

export default App;
