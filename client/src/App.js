import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"

import CreateUser from './components/CreateUser';
import CreateExercise from './components/CreateExercise'
import Home from './components/Home'
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar></NavBar>
      <br/>

      <Routes>
      <Route path ="/" element ={<Home/>}/>
      <Route path ="/user" element ={<CreateUser/>}/>
      <Route path ="/create" element ={<CreateExercise/>}/>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
