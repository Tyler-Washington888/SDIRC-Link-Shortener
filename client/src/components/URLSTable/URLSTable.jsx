import React from "react";
import "./URLSTable.css";

function URLSTable({ links }) {
  return (
    <table className="all-urls-container">
      <thead className="all-urls-thead">
        <tr className="all-urls-thead-column-width">
          <th className="th-short-long-url all-short-url">Short URL</th>
          <th className="th-short-long-url">Long URL</th>
          <th className="th-createdOn-clicks">Date</th>
          <th className="th-createdOn-clicks">Clicks</th>
        </tr>
      </thead>
      <tbody>
        {links?.map((link, index) => {
          return (
            <tr className="all-urls-tr" key={index}>
              <td>{link.shortUrl}</td>
              <td className="long-url">{link.longUrl}</td>
              <td className="th-createdOn-clicks">{link.date.slice(4, 15)}</td>
              <td className="th-createdOn-clicks">{link.clicks}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default URLSTable;
