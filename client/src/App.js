import { Route, Routes } from "react-router";
import AllURLS from "./screens/AllURLS/AllURLS.jsx";
import Login from "./screens/Login/Login.jsx";
import MyURLS from "./screens/MyURLS/MyURLS.jsx";
import NewUser from "./screens/NewUser/NewUser.jsx";
import Nav from "./components/Nav/Nav.jsx";
import "./App.css";
import { useState, useEffect } from "react";
import { getLinks } from "./services/links.js";
import { verifyUser, removeToken } from "./services/auth.js";

function App() {
  const [links, setLinks] = useState(null);
  const [user, setUser] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchLinks = async () => {
      let allLinks = await getLinks();
      if (allLinks) {
        allLinks = allLinks.reverse();

        setLinks(allLinks);
      }
    };

    fetchLinks();
  }, [links]);

  useEffect(() => {
    const handleVerify = async () => {
      const userr = await verifyUser();
      setUser(userr);
    };
    handleVerify();
  }, []);

  return (
    <div className="App">
      {user ? (
        <>
          <Nav setUser={setUser} user={user} removeToken={removeToken} />
          <Routes>
            <Route
              path="/"
              element={
                <AllURLS links={links} user={user} setRefresh={setRefresh} />
              }
            />
            <Route
              path="/my-urls"
              element={
                <MyURLS
                  user={user}
                  setRefresh={setRefresh}
                  refresh={refresh}
                  links={links}
                />
              }
            />
            <Route path="/new-user" element={<NewUser />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <Login
                setLinks={setLinks}
                setUser={setUser}
                setRefresh={setRefresh}
              />
            }
          />
          <Route
            exact
            path="/login"
            element={<Login setUser={setUser} setRefresh={setRefresh} />}
          />
          <Route
            exact
            path="/my-urls"
            element={<Login setUser={setUser} setRefresh={setRefresh} />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
