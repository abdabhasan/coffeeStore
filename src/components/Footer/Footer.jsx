import SocialMedia from "../SocialMedia";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h5>
          &copy;{new Date().getFullYear()}
          <span> أرض القهوة </span>
          الحقوق محفوظة
        </h5>
      </div>
      <SocialMedia />
    </footer>
  );
};

export default Footer;
