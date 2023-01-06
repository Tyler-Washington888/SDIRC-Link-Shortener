import React from "react";
import CreateURLForm from "../../components/CreateURLForm/CreateURLForm";
import NewURLDetails from "../../components/NewURLDetails/NewURLDetails.jsx";
import "./MyURLS.css";
import { useState } from "react";
import MyURLSTable from "../../components/MyURLSTable/MyURLSTable";
import UpdateURL from "../../components/UpdateURL/UpdateURL";
import UpdatedURLDetails from "../../components/UpdatedURLDetails/UpdatedURLDetails";

function MyURLS({ myLinks, setRefresh }) {
  const [newUrl, setNewUrl] = useState(null);
  const [updateURL, setUpdateURL] = useState(null);
  const [updatedURL, setUpdatedURL] = useState(null);

  return (
    <div>
      {updateURL || updatedURL ? (
        <div>
          <div>
            {updateURL && !updatedURL ? (
              <div>
                Hi Tyler, complete the form to update the custom name for your
                URL!
              </div>
            ) : (
              <div>Tyler, your link has been renamed and is ready for use.</div>
            )}
          </div>
          <div>
            {updateURL && !updatedURL ? (
              <UpdateURL
                setUpdateURL={setUpdateURL}
                updateURL={updateURL}
                setUpdatedURL={setUpdatedURL}
                setRefresh={setRefresh}
              />
            ) : (
              <UpdatedURLDetails
                updatedURL={updatedURL}
                setUpdatedURL={setUpdatedURL}
              />
            )}
          </div>
        </div>
      ) : (
        <div>
          <div>
            {newUrl ? (
              <div>Tyler, your link was shortened and is ready for use.</div>
            ) : (
              <div>Hi Tyler, complete the form to create a shortened URL!</div>
            )}
          </div>
          <div>
            {newUrl ? (
              <NewURLDetails newUrl={newUrl} setNewUrl={setNewUrl} />
            ) : (
              <CreateURLForm setNewUrl={setNewUrl} setRefresh={setRefresh} />
            )}
          </div>
        </div>
      )}
      <div>
        <MyURLSTable
          myLinks={myLinks}
          setUpdateURL={setUpdateURL}
          setUpdatedURL={setUpdatedURL}
        />
      </div>
    </div>
  );
}

export default MyURLS;
