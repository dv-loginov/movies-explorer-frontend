import './Main.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Section from '../Section/Section'
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

const Main = () => {
  return (
    <>
      <Header/>
      <main className='main'>
        <Section name = 'promo'>
          <Promo />
        </Section>
        <Section name = 'about-project'>
          <AboutProject />
        </Section>
        <Section name = 'techs'>
          <Techs />
        </Section>
        <Section name = 'about-me'>
          <AboutMe />
        </Section>
        <Section name = 'portfolio'>
          <Portfolio />
        </Section>


      </main>
      <Footer />
    </>
  )
    ;
};

export default Main;
