import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <h2 className="portfolio__header">Портфолио</h2>
      <ul className='portfolio__list'>
        <li className="portfolio__item">
          <a href="/" className="portfolio__link">Статичный сайт
            <div className="portfolio__ico">↗</div>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="/" className="portfolio__link">Адаптивный сайт
            <div className="portfolio__ico">↗</div>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="/" className="portfolio__link">Одностраничное приложение
            <div className="portfolio__ico">↗</div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
