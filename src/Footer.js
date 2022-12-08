import { AiFillPhone } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const Instagrams = [
  {
    name: "instagram",
    icon: <FaInstagram />,
    link: "https://instagram.com",
    target: "_blank",
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="tel">
        <AiFillPhone className="icons" id="phone-icon" />
        <h4>(XX)XXXXX-XXXX</h4>
      </div>

      <div className="insta">
        {Instagrams.map((insta) => (
          <a className="instagram" href={insta.link}>
            {insta.icon}{" "}
          </a>
        ))}
        <h4 className="icon-text">INSTAGRAM</h4>
      </div>
    </div>
  );
};

export default Footer;
