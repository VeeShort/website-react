import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import DropDown from "./components/NavBar/Dropdown";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
