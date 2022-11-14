import { messages } from './messages';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Hero content={messages.hero}/>
      <Section content={messages.work} type={'work'}/>
      <Section content={messages.education} type={'education'}/>
      <Footer content={messages.socialMedia}/>
    </div>
  );
}

export default App;
