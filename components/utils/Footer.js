import { SocialIcons } from "..";

const Footer = () => {
  return (
    <footer>
      <p className="footer_title">Freelancer Banna</p>
      <div className="footerSocial">
        <SocialIcons />
      </div>
      <p className="copyRight">&#169; all rights reserved</p>
    </footer>
  );
};

export default Footer;
