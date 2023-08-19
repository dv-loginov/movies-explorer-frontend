import './SectionPortfolio.css';
import { Link } from 'react-router-dom';

const SectionPortfolio = () => {
  return (
    <div className='portfolio'>
      <h2 className="portfolio__header">Портфолио</h2>
      <ul className='portfolio__list'>
        <li className="portfolio__item">
          <Link
            target="_blank"
            className='portfolio__link'
            to='https://github.com/dv-loginov/how-to-learn'>
            Статичный сайт
            <div className="portfolio__ico">↗</div>
          </Link>
        </li>
        <li className="portfolio__item">
          <Link
            target="_blank"
            className='portfolio__link'
            to='https://github.com/dv-loginov/russian-travel'>
            Адаптивный сайт
            <div className="portfolio__ico">↗</div>
          </Link>
        </li>
        <li className="portfolio__item">
          <Link
            target="_blank"
            className='portfolio__link'
            to='https://github.com/dv-loginov/react-mesto-api-full-gha'>
            Одностраничное приложение
            <div className="portfolio__ico">↗</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SectionPortfolio;
