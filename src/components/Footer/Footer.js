import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__container">
        <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className="footer__subtitle">
          <div className="footer__copyright">&#169; { new Date().getFullYear() }</div>
          <ul className="footer__nav">
            <li>
              <a href="https://practicum.yandex.ru" target='_blank' className="footer__link"
                 rel="noreferrer">Яндекс.Практикум</a>
            </li>
            <li>
              <a href="https://github.com/dv-loginov/" target='_blank' className="footer__link"
                 rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
