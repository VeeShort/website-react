import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import VideoModal from './components/VideoModal/VideoModal';

function App() {
  return (
    <Router>
      <NavBar />
      <VideoModal />
    </Router>
  );
}

export default App;
