import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Screens from "./screens"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Screens.Home />}/>
        <Route path='/upload' element={<Screens.Home />}/>
        <Route path='/suggestions' element={<Screens.Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
