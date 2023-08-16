import './ButtonAuthSubmit.css';

const ButtonAuthSubmit = ({text, handleSubmit}) => {
  return (
    <button type='submit' className='button-auth-submit'>
      {text}
    </button>
  );
};

export default ButtonAuthSubmit;
