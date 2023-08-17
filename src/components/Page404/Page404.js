import './Page404.css';
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="page404">
      <main>
        <section className="page404__main">
          <h1 className="page404__title">404</h1>
          <h2 className="page404__subtitle">Страница не найдена</h2>
          <Link to='/' className="page404__link">Назад</Link>
        </section>
      </main>
    </div>
  );
};

export default Page404;
