import './App.scss';
import NavBar from './components/NavBar/NavBar';
import HeadingContent from './components/Heading/HeadingContent';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <section className="heading">
        <NavBar />
        <HeadingContent />
      </section>
    </Router>
  );
}

export default App;
