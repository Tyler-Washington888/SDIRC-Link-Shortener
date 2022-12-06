import { useState, useEffect } from "react";
import { Route, Routes} from "react-router";
import AllURLS from "./screens/AllURLS/AllURLS.jsx"
import CreateURL from "./screens/CreateURL/CreateURL.jsx"
import Login from "./screens/Login/Login.jsx"
import MyURLDetails from "./screens/MyURLDetails/MyURLDetails.jsx"
import MyURLS from "./screens/MyURLS/MyURLS.jsx"
import NavMenu from "./screens/NavMenu/NavMenu.jsx"
import NewURL from "./screens/NewURL/NewURL.jsx"
import RenameMyURL from "./screens/RenameMyURL/RenameMyURL.jsx"
import URLDetails from "./screens/URLDetails/URLDetails.jsx"

function App(){
  return (
    <Routes>
      <Route path="/" element={<AllURLS />}/>
      <Route path="/create" element={<CreateURL />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/my-url-details/:id" element={<MyURLDetails />}/>
      <Route path="/my-urls" element={<MyURLS />}/>
      <Route path="/nav-menu" element={<NavMenu/>}/>
      <Route path="/new-url/:id" element={<NewURL />}/>
      <Route path="/rename-my-url/id" element={<RenameMyURL/>}/>
      <Route path="/url-details" element={<URLDetails />}/>
    </Routes>
  );
}

export default App;