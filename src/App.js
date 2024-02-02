import './App.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";

import Vision from './Vision/Vision'
import Carousel from './Carousel/Carousel';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar></Navbar>
      <Routes>
      <Route exact path='/' Component={Carousel}></Route>
      <Route exact path='/vision' Component={Vision}></Route>
      </Routes>
    <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
