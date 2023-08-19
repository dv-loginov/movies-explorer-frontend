import './FooterPageAuth.css';
import { Link } from "react-router-dom";

const FooterPageAuth = ({question, link, linkText}) => {
  return (
    <footer className="footer-page-auth">
        <span className="footer-page-auth__question">
          { question }
        </span>
        <Link to={ link } className="footer-page-auth__link">
          { linkText }
        </Link>
    </footer>
  );
};

export default FooterPageAuth;
