import React from "react";

function URLSTable({ links }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Short URL</th>
          <th>Long URL</th>
          <th>Created On</th>
          <th>Clicks</th>
        </tr>
      </thead>
      <tbody>
        {links?.map((link, index) => {
          return (
            <tr key={index}>
              <td>{link.shortUrl}</td>
              {/* <td>{link.longUrl}</td> */}
              <td>{link.date}</td>
              <td>{link.clicks}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default URLSTable;
