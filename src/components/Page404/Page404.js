import './Page404.css';
import { useLocation } from "react-router-dom";

const Page404 = () => {
  const location = useLocation();
  console.log(location);
  return (
    <h1>

    </h1>
  );
};

export default Page404;
