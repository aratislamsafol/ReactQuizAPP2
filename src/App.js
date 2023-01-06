import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/assets/css/global.css';
import Home from "./components/pages/Home";
import React from 'react';
function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path="" element={<Home/>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
