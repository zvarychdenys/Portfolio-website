import "./styles/main.css";
import { Helmet } from "react-helmet";


import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import NavBar from "./componets/nav/NavBar";
import Footer from "./componets/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import MyProject from "./pages/MyProject";
// import logo from "./../src/img/icons/logo_size.jpg"        



function App() {
  return (
    <div className="App">
      <Helmet>
          <title>Denys Zvarych</title>
        </Helmet>
      <Router>
          <NavBar/>         

          <Routes>
            <Route path="/" element = {<Home/>} />
            <Route path="/Projects" element = {<Projects/>} />
            <Route path="/MyProject" element = {<MyProject/>} />
            <Route path="/Contacts" element = {<Contacts/>} />
          </Routes>

          <Footer/>с
      </Router>
  </div>
  );
}

export default App;
