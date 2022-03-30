import logo from './logo.svg';
import './App.css';
import Headers from './components/Header/Headers'
import TopContainer from './components/TopContainer/TopContainer'
import SkillContainer from './components/SkillContainer/SkillContainer'
import ProjectContainer from './components/ProjectContainer/ProjectContainer';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
     <Headers></Headers>
     <TopContainer />
     <SkillContainer />
     <ProjectContainer />
     <Contact />
    </div>
  );
}

export default App;
