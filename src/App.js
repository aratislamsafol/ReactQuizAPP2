import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/assets/css/global.css';
import AllCourse from './components/pages/AllCourse';
import Home from "./components/pages/Home";
import Login from './components/pages/Login';
import Quiz from './components/pages/Quiz';
import Registration from './components/pages/Reg';
import Success from './components/pages/Success';
import PrivateRoute from './components/privateRouteFunction/PrivateRoute';
import PublicRoute from './components/publicRoute/PublicRoute';
import { AuthProvider } from './context/AuthContext';
function App() {
  return (
    <div className="App">
        <Router>
            <AuthProvider>
                <Routes>
                  <Route exact path="/" element={<Home/>}></Route>
                  <Route exact path="/allcourse" element={<AllCourse/>}></Route>
                  <Route element={<PublicRoute />}>
                    <Route exact path="/login" element={<Login/>}></Route>
                    <Route exact path="/reg" element={<Registration/>}></Route>
                  </Route>
                  <Route element={<PrivateRoute />}>
                    <Route exact path="/quiz/:id" element={<Quiz/>}></Route>
                    <Route exact path="/result/:id" element={<Success/>}></Route>
                  </Route>
                </Routes>  
            </AuthProvider>   
        </Router>
    </div>
  );
}

export default App;
