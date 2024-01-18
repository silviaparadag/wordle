import '../styles/layout/Footer.scss';
// import SpLogo from '../assets/logo-sp-black.svg';

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="footer__grid">
        <a href="https://silviaparadag.github.io/portfolio/">
          <img src={SpLogo} alt="Silvia Parada Logo" className="header__logo" />
        </a>
      </div> */}
      <div className="footer__text">
        <p className="footer__text--p">© Silvia Parada | 2024</p>
        <p className="footer__text--italic">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
