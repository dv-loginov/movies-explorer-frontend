import './Main.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Promo from '../Promo/Promo';


const Main = () => {
  return (
    <>
      <Header/>
      <main className='main'>
        <Promo />
      </main>
      <Footer />
    </>
  )
    ;
};

export default Main;
