import './Promo.css';

const Promo = () => {
  return (
    <section className='promo'>
      <div className="promo__container">
        <div className="promo__info">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <span className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </span>
          <a href="/" className="promo__btn">Узнать больше</a>
        </div>
        <div className="promo__logo"></div>
      </div>

    </section>
  );
};

export default Promo;
