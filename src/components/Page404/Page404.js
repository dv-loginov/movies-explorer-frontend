import './Page404.css';
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="page404">
      <main className="page404__main">
        <h2 className="page404__title">404</h2>
        <h3 className="page404__subtitle">Страница не найдена</h3>
        <Link to='/' className="page404__link">Назад</Link>
      </main>
    </div>
  );
};

export default Page404;
