import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import HeadingContent from './components/Heading/HeadingContent';

function App() {
  return (
    <Router>
      <NavBar />
      <HeadingContent />
    </Router>
  );
}

export default App;
