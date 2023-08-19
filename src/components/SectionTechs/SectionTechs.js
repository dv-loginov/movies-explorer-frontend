import './SectionTechs.css';
import HeaderSection from '../HeaderSection/HeaderSection';

const SectionTechs = () => {
  return (
    <div className='techs'>
      <HeaderSection name='Технологии' />
      <h2 className="techs__title">7 технологий</h2>
      <h3 className="techs__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили
        в дипломном проекте.
      </h3>
      <ul className="techs__list">
        <li className="techs__list-item">HTML</li>
        <li className="techs__list-item">CSS</li>
        <li className="techs__list-item">JS</li>
        <li className="techs__list-item">React</li>
        <li className="techs__list-item">Git</li>
        <li className="techs__list-item">Express.js</li>
        <li className="techs__list-item">mongoDB</li>
      </ul>
    </div>
  );
};

export default SectionTechs;
