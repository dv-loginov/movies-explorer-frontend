import './HeaderSection.css';

const HeaderSection = ({name}) => {
  return (
    <h2 className='header-section'>
      { name }
    </h2>
  );
};

export default HeaderSection;
