import './ButtonAuthSubmit.css';

const ButtonAuthSubmit = ({text, isValid}) => {
  return (
    <button
      type='submit'
      disabled={ !isValid }
      className={ `button-auth-submit ${ isValid ? "" : 'button-auth-submit_disable' }` }
    >
      { text }
    </button>
  );
};

export default ButtonAuthSubmit;
