// import { Navigate } from "react-router-dom";
import { Navigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
  return (
    props.isLoggedIn ? props.component : <Navigate to="/" replace/>
  );
};

export default ProtectedRoute;

