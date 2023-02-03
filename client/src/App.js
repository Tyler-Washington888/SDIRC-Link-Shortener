import { Route, Routes } from "react-router";
import AllURLS from "./screens/AllURLS/AllURLS.jsx";
import Login from "./screens/Login/Login.jsx";
import MyURLS from "./screens/MyURLS/MyURLS.jsx";
import Nav from "./components/Nav/Nav.jsx";
import "./App.css";
import { useState, useEffect } from "react";
import { getLinks } from "./services/links.js";
import { verifyUser } from "./services/auth.js";

function App() {
  const [links, setLinks] = useState(null);
  const [myLinks, setMyLinks] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleVerify = async () => {
      const userr = await verifyUser();
      setUser(userr);
    };
    handleVerify();
  }, []);

  useEffect(() => {
    const fetchLinks = async () => {
      let allLinks = await getLinks();
      if (allLinks) {
        allLinks = allLinks.reverse();
        // filters AllLinks array for userLinks

        setLinks(allLinks);
      }
    };

    fetchLinks();
  }, [links]);

  useEffect(() => {
    const fetchLinks = async () => {
      let aLinks = await getLinks();
      if (aLinks) {
        let userLinks = aLinks
          .reverse()
          .filter((link) => link.email == user.email);
        // filters AllLinks array for userLinks
        setMyLinks(userLinks);
      }
    };

    fetchLinks();
  }, [links]);

  return (
    <div className="App">
      {user ? (
        <>
          <Nav setUser={setUser} user={user} />
          <Routes>
            <Route path="/" element={<AllURLS links={links} user={user} />} />
            <Route
              path="/my-urls"
              element={<MyURLS myLinks={myLinks} user={user} />}
            />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/my-urls" element={<Login setUser={setUser} />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
