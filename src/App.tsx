import IntlButton from './components/IntlButton';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';
import msg from './translations/en/global.json'

import './App.css';

function App() {
  return (
    <div className="App">
      <IntlButton></IntlButton>
      <Hero content={msg.hero}/>
      <Section content={msg.work} type={'work'}/>
      <Section content={msg.education} type={'education'}/>
      <Footer content={msg.socialMedia}/>
    </div>
  );
}

export default App;
