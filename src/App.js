import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro.js';
import Skill from './components/Skills/skill.js';
import Work from './components/Works/work.js';
import Contact from './components/Contact/contact.js'
import Footer from './components/Footer/footer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skill />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
