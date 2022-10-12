import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <h2 className="footer-title">Wices Research Unit</h2>
      <p className="footer-p">Be the change. Be the future.</p>
      {/* <div className="footer-social">
        <YouTubeIcon
          className="footer-social-icon"
          sx={{ fontSize: 40 }}
          onClick={handleYoutubeLink}
        />
      </div> */}
      <a
        className="footer-social"
        href="https://www.youtube.com/channel/UCj3a4UiJuOlOupZmIBDLT-w/featured"
      >
        <YouTubeIcon
          className="footer-social-icon"
          sx={{
            fontSize: 50,
            color: "#CC0000",
            transition: "0.3s",
            "&:hover": {
              fontSize: 60,
            },
          }}
        />
      </a>
      <div className="footer-copyright">
        <p className="footer-copyright-description">
          copyright Ⓒ 2022 Wices RU
        </p>
      </div>
    </footer>
  );
};

export default Footer;
