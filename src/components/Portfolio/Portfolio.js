import './Portfolio.css';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <h2 className="portfolio__header">Портфолио</h2>
      <ul className='portfolio__list'>
        <li className="portfolio__item">
          <Link className='portfolio__link' to='/'>Статичный сайт
            <div className="portfolio__ico">↗</div>
          </Link>
        </li>
        <li className="portfolio__item">
          <Link className='portfolio__link' to='/'>Адаптивный сайт
            <div className="portfolio__ico">↗</div>
          </Link>
        </li>
        <li className="portfolio__item">
          <Link className='portfolio__link' to='/'>Одностраничное приложение
            <div className="portfolio__ico">↗</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
