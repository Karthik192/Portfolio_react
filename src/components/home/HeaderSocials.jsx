import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const HeaderSocials = () => {
  const insta = "https://www.instagram.com/karthik_kirito/";
  const twitter = "https://twitter.com/KarthikKirito";
  const github = "https://github.com/Karthik192";
  const facebook = "https://www.facebook.com/profile.php?id=100008716802973";
  const linkedin = "https://www.linkedin.com/in/karthik192/";

  return (
    <div className="home__socials">
      <a href={insta} className="home__social-link" target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
      </a>

      <a href={twitter} className="home__social-link" target="_blank">
      <FontAwesomeIcon icon={faTwitter} />
      </a>

      <a href={github} className="home__social-link" target="_blank">
      <FontAwesomeIcon icon={faGithub} />
      </a>

      <a href={facebook} className="home__social-link" target="_blank">
      <FontAwesomeIcon icon={faFacebook} />
      </a>

      <a href={linkedin} className="home__social-link" target="_blank">
      <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
};

export default HeaderSocials;
