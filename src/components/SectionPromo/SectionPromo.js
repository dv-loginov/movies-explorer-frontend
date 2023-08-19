import './SectionPromo.css';
import { Link } from 'react-router-dom';

const SectionPromo = () => {
  return (
    <div className='promo'>
      <div className="promo__info">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <span className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </span>
        <Link target="_blank"  className="promo__btn" to='https://practicum.yandex.ru'>
          Узнать больше
        </Link>
      </div>
      <div className="promo__logo"></div>
    </div>
  );
};

export default SectionPromo;
