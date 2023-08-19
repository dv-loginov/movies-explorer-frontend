import './PageMain.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Section from '../Section/Section'
import SectionPromo from '../SectionPromo/SectionPromo';
import SectionAboutProject from '../SectionAboutProject/SectionAboutProject';
import SectionTechs from '../SectionTechs/SectionTechs';
import SectionAboutMe from '../SectionAboutMe/SectionAboutMe';
import SectionPortfolio from '../SectionPortfolio/SectionPortfolio';
import Logo from '../Logo/Logo';
import NavNoAuth from '../NavNoAuth/NavNoAuth';

const PageMain = () => {
  return (
    <>
      <Header type='landing'>
        <Logo />
        <NavNoAuth />
      </Header>
      <main className='page-main'>
        <Section name = 'promo'>
          <SectionPromo />
        </Section>
        <Section name = 'about-project'>
          <SectionAboutProject />
        </Section>
        <Section name = 'techs'>
          <SectionTechs />
        </Section>
        <Section name = 'about-me'>
          <SectionAboutMe />
        </Section>
        <Section name = 'portfolio'>
          <SectionPortfolio />
        </Section>
      </main>
      <Footer />
    </>
  )
    ;
};

export default PageMain;
