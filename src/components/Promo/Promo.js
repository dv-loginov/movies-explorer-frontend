import './Promo.css';
import { Link } from 'react-router-dom';

const Promo = () => {
  return (
    <div className='promo'>
      <div className="promo__info">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <span className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </span>
        <Link className="promo__btn" to='/'>
          Узнать больше
        </Link>
      </div>
      <div className="promo__logo"></div>
    </div>
  );
};

export default Promo;
