import { Route, Routes } from "react-router";
import AllURLS from "./screens/AllURLS/AllURLS.jsx";
import Login from "./screens/Login/Login.jsx";
import MyURLS from "./screens/MyURLS/MyURLS.jsx";
import Nav from "./components/Nav/Nav.jsx";
import "./App.css";
import { useState, useEffect } from "react";
import { getLinks } from "./services/links.js";

function App() {
  const [links, setLinks] = useState(null);

  useEffect(() => {
    const fetchLinks = async () => {
      let links = await getLinks();
      if (links) {
        links = links.reverse();
        setLinks(links);
      }
    };
    fetchLinks(links);
  }, [links]);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<AllURLS links={links} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-urls" element={<MyURLS />} />
      </Routes>
    </div>
  );
}

export default App;
