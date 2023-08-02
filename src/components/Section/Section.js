import './Section.css';

const Section = (props) => {
  return (
    <section className={ `section section_${ props.name }` }>
      <div className='section__container'>
        { props.children }
      </div>
    </section>
  );
};

export default Section;
