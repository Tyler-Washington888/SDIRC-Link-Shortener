import React from "react";

function MyURLSTable({ myLinks, setUpdateURL, setUpdatedURL }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Short URL</th>
          {/* <th>Long URL</th> */}
          <th>Created On</th>
          <th>Clicks</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {myLinks?.map((link, index) => {
          return (
            <tr key={index}>
              <td>{link.shortUrl}</td>
              {/* <td>{link.longUrl}</td> */}
              <td>{link.date.slice(4, 15)}</td>
              <td>{link.clicks}</td>
              <td>
                <button
                  onClick={() => {
                    setUpdatedURL(null);

                    setUpdateURL({
                      urlCode: "",
                      longURL: link.longUrl,
                      shortURL: link.shortUrl,
                      email: link.email,
                      id: link._id,
                    });
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
