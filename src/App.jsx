import './App.scss';

import Header from 'components/Header/Header';
import AboutMe from 'components/AboutMe/AboutMe';
import Level from 'components/Level/Level';
import PriceList from 'components/PriceList/PriceList';
import Contact from 'components/Contact/Contact';
import Footer from 'components/Footer/Footer';

function App() {
  return (
    <>
      <Header color='light' />
      <AboutMe color='dark' />
      <Level color='light' />
      <PriceList color='dark' />
      <Contact color='light' />
      <Footer color='dark' />
    </>
  );
}

export default App;
