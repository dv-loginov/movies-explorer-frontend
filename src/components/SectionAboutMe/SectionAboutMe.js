import './SectionAboutMe.css';
import HeaderSection from '../HeaderSection/HeaderSection';
import photo from '../../images/photo.png';
import { Link } from 'react-router-dom';
const SectionAboutMe = () => {
  return (
    <div className="about-me">
      <HeaderSection name='Студент'/>
      <div className="about-me__content">
        <div className="about-me__info">
          <h3 className="about-me__name">Виталий</h3>
          <h3 className="about-me__title">Фронтенд-разработчик, 30 лет</h3>
          <p className="about-me__subtitle">Я родился и живу в Саратове,
            закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
            Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб-разработке, начал заниматься
            фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link target="_blank" className="about-me__link" to='https://github.com/dv-loginov'>
            Github
          </Link>
        </div>
        <img className="about-me__photo" src={photo} alt="фото разработчика"/>
      </div>
    </div>
  );
};

export default SectionAboutMe;
