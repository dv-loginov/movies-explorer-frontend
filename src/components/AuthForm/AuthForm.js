import './AuthForm.css';

const AuthForm = (props) => {
  return (
    <form action={'#'}
          className="auth-form"
          name={props.name}
          onSubmit={props.onSubmit}
    >
      {props.children}
    </form>
  );
};

export default AuthForm;
