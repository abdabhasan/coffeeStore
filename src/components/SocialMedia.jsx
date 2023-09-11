import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <Wrapper>
      <div className="social-media">
        <a href="https://www.facebook.com">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagram />
        </a>
      </div>
    </Wrapper>
  );
};

export default SocialMedia;

const Wrapper = styled.div`
  a {
    color: #fff;
    text-decoration: none;
    margin: 0 10px;
  }
`;
