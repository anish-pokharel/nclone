import React from "react";
import "./Footer.css";
const Footer = () => {
  const Links = [
    "Audio and Subtitles",
    "Audio Description",
    "Help Center",
    "Gift Cards",
    "Media Center",
    "Investor Relations",
    "Jobs",
    "Terms of Use",
    "Privacy",
    "Legal Notice",
    "Cookie Preferences",
    "Impressum",
    "Contact Us",
  ];

  return (
    <>
      <ul className="linksList">
        {Links.map((links) => {
          return (
            <li className="link" key={links}>
              <a href="/">{links}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Footer;
