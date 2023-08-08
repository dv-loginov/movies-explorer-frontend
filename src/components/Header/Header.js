import './Header.css'

const Header = (props) => {
  const type = props.type === 'landing' ? 'landing' : 'app';
  return (
    <header className={ `header header_${ type }` }>
      <div className="header__container">
        { props.children }
      </div>

    </header>
  );
};

export default Header;
