import {
  Routes,
  Route,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  Redirect,
} from "react-router-dom";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useAccount,
} from "@azure/msal-react";

import AllURLS from "./screens/AllURLS/AllURLS.jsx";
import Login from "./screens/Login/Login.jsx";
import MyURLS from "./screens/MyURLS/MyURLS.jsx";
import Nav from "./components/Nav/Nav.jsx";
import "./App.css";
import { useState, useEffect } from "react";
import { getLinks } from "./services/links.js";

export const LinkContext = React.createContext({
  links: [],
  refreshLinks: () => {
    // do nothing
  },
});

export const AuthAccountInfoContext = React.createContext(null);

function App() {
  const accountInfo = useAccount(); // ***RIGHT HERE IS WHERE WE GET THE INFO FROM THE AUTH***
  /** STRUCTURE OF accountInfo OBJECT
    {
      // home account identifier for this account object
      homeAccountId: string;

      // Entity who issued the token represented as a full host of it (e.g. login.microsoftonline.com)
      environment: string;

      // Full tenant or organizational id that this account belongs to
      tenantId: string;

      // preferred_username claim of the id_token that represents this account.
      username: string;
    };
 */
  try {
    accountInfo.loginRedirect({});
  } catch (err) {
    // handle error
  }

  const [links, setLinks] = useState(null);

  const [refresh, setRefresh] = useState(true);
  const refreshLinks = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    const fetchLinks = async () => {
      let allLinks = await getLinks();
      if (allLinks) {
        allLinks = allLinks.reverse();
        setLinks(allLinks);
      }
    };
    fetchLinks();
  }, [refresh]);

  return (
    <div className="App">
      <Nav />
      <LinkContext.Provider value={{ links, refreshLinks }}>
        <AuthAccountInfoContext.Provider>
          <Routes>
            <AuthenticatedTemplate>
              <Route path="/my-urls" element={<MyURLS />} />
              <Route path="/" element={<AllURLS />} />
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
              <Route path="/" element={<Redirect path="/login" />} />
              <Route path="/login" element={<Login />} />
            </UnauthenticatedTemplate>
          </Routes>
        </AuthAccountInfoContext.Provider>
      </LinkContext.Provider>
    </div>
  );
}

export default App;
