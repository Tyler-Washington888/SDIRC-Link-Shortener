import React, { useContext } from "react";
import { LinkContext } from "../../App";
import "./MyURLSTable.css";

function MyURLSTable({ setUpdateURL, setUpdatedURL, setErrorMessage }) {
  const { links, refreshLinks } = useContext(LinkContext);

  const getUserEmail = () => {
    return "tyler.washington.work";
  };

  return (
    <table className="my-urls-container">
      <thead className="my-urls-thead">
        <tr>
          <th className="my-urls-th-short-long-url my-short-url">Short URL</th>
          <th className="my-urls-th-short-long-url">Long URL</th>
          <th className="my-urls-th-createdOn-clicks-edit">Date</th>
          <th className="my-urls-th-createdOn-clicks-edit">Clicks</th>
          <th className="my-urls-th-createdOn-clicks-edit">Edit</th>
        </tr>
      </thead>
      <tbody>
        {links
          .filter((l) => l.email === getUserEmail())
          .map((link, index) => {
            return (
              <tr className="my-urls-tr" key={index}>
                <td>{link.shortUrl}</td>
                <td className="my-urls-long-url">{link.longUrl}</td>
                <td className="th-createdOn-clicks-edit">
                  {link.date.slice(4, 15)}
                </td>
                <td className="th-createdOn-clicks-edit">{link.clicks}</td>
                <td className="th-createdOn-clicks-edit">
                  <button
                    className="my-urls-button"
                    onClick={() => {
                      setUpdatedURL(null);

                      setUpdateURL({
                        urlCode: "",
                        longURL: link.longUrl,
                        shortURL: link.shortUrl,
                        email: link.email,
                        id: link._id,
                      });

                      setErrorMessage(null);
                      // enhances ui by scrolling document back to the top to the updateURLForm
                      document.documentElement.scrollTop = 0;
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default MyURLSTable;
