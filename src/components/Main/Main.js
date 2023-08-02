import './Main.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Section from '../Section/Section'
import Promo from '../Promo/Promo';
// import AboutProject from '../AboutProject/AboutProject';




const Main = () => {
  return (
    <>
      <Header/>
      <main className='main'>
        <Section name = 'promo'>
          <Promo />
        </Section>
        <Section name = 'about-project'>
        </Section>
        {/*<Promo />*/}
        {/*<AboutProject />*/}
      </main>
      <Footer />
    </>
  )
    ;
};

export default Main;
