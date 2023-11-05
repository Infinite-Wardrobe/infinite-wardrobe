import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Screens from "./screens"
import * as Components from "./components"
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const authToken = cookies.get('authorisation');

if (authToken) {
  client.connectUser({
    id: cookies.get('userId'),
    name: cookies.get('username'),
    hashedPassword: cookies.get('hashedPassword'),
  }, authToken)
}

if (!authToken) return <Auth/>

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Screens.Home />}/>
        <Route path='/upload' element={<Screens.Home />}/>
        <Route path='/suggestions' element={<Screens.Home />}/>
      </Routes>
      <Components.Bottombar/>
    </BrowserRouter>
  );
}

export default App;
