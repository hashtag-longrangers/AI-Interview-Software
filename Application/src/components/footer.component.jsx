import React from "react";
import { GiPencil } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FiThumbsUp } from "react-icons/fi";
import { MdOutlineCopyright } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
//import { GiPencil } from "react-icons/gi";

const Footer = () => {
  return (
    <>
      <div
        className="d-flex flex-column px-3  align-items-center font-linkk"
        style={{ backgroundColor: "#dadada" }}
      >
        <br />

        <div className="h-8 fs-2">Contact Us!</div>
        {/* <div>Reach out to us on Github, or join us in the chat room. </div> */}
        <br />

        <div className="d-flex align-items-center gap-4 flex-wrap">
          <div className="d-flex align-items-center gap-2">
            <FaCode className="fs-3 text-success" />
            <a
              href="https://github.com/hashtag-longrangers/AI-Interview-Software"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-dark fw-medium"
            >
              View Source Code
            </a>
          </div>

          <div className="d-flex align-items-center gap-2">
            <FaGithub className="fs-3 text-dark" />
            <a
              href="https://github.com/hashtag-longrangers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-dark fw-medium"
            >
              GitHub Profile
            </a>
          </div>

          <div className="d-flex align-items-center gap-2">
            <FaLinkedin className="fs-3 text-primary" />
            <a
              href="https://linkedin.com/in/arnav-rangari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-dark fw-medium"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="d-flex align-items-center gap-1">
          <MdOutlineCopyright className="fs-2" />
          2025 AI Interview.All rights reserved.
        </div>
        <br />
      </div>
    </>
  );
};

export default Footer;
