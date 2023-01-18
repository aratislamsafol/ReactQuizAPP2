import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/assets/css/global.css';
import Home from "./components/pages/Home";
import React from 'react';
import AllCourse from './components/pages/AllCourse';
import Login from './components/pages/Login';
import Registration from './components/pages/Reg';
import Quiz from './components/pages/Quiz';
import Success from './components/pages/Success';
import { AuthProvider } from './context/AuthContext';
function App() {
  return (
    <div className="App">
        <Router>
            <AuthProvider>
                <Routes>
                  <Route exact path="/" element={<Home/>}></Route>
                  <Route exact path="/allcourse" element={<AllCourse/>}></Route>
                  <Route exact path="/login" element={<Login/>}></Route>
                  <Route exact path="/reg" element={<Registration/>}></Route>
                  <Route exact path="/quiz" element={<Quiz/>}></Route>
                  <Route exact path="/result" element={<Success/>}></Route>
                </Routes>  
            </AuthProvider>   
        </Router>
    </div>
  );
}

export default App;
