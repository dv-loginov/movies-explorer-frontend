import './AuthForm.css';

const AuthForm = (props) => {
  return (
    <form action={'#'}
          className="auth-form"
          name={props.name}
          onSubmit={props.onSubmit}
          noValidate={true}
    >
      {props.children}
    </form>
  );
};

export default AuthForm;
