import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {HashRouter, Routes, Route} from "react-router-dom";
import { Home, About } from './components/F2';
import Nav from './components/nav';
import Contact from './components/contact';
import EmployeeDetails from './components/EmployeeDetails';

function App() {
  return (
    <div>
      
      { <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter> }

      <EmployeeDetails />
      
    </div>
  );
}

export default App;
