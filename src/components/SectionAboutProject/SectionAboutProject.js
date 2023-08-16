import './SectionAboutProject.css';
import HeaderSection from '../HeaderSection/HeaderSection';

const SectionAboutProject = () => {
  return (
    <div className="about-project">
      <HeaderSection name='О проекте'/>
      <div className="about-project__cards">
        <div className="about-project__card">
          <h3 className="about-project__card-title">
            Дипломный проект включал 5 этапов
          </h3>
          <h4 className="about-project__card-subtitle">
            Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.
          </h4>
        </div>
        <div className="about-project__card">
          <h3 className="about-project__card-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <h4 className="about-project__card-subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.
          </h4>
        </div>
      </div>
      <div className="about-project__lasting">
        <div className="about-project__cell about-project__cell_short about-project__cell_colored">1 неделя</div>
        <div className="about-project__cell">4 недели</div>
      </div>
      <div className="about-project__naming">
        <div className="about-project__cell about-project__cell_short">Back-end</div>
        <div className="about-project__cell">Front-end</div>
      </div>
    </div>
  );
};

export default SectionAboutProject;
