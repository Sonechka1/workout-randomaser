import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './page/HomePage';
import Header from './components/header';
import bg from './img/bg.webp';
import WorkoutPage from './page/WorkoutPage';

function App() {
  return (
    <Router>
      <div style={{ backgroundImage: `url(${bg})` }} className="bg">
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/workout" element={<WorkoutPage />} />
        </Routes>
    </div>
    </Router>

        
  
  );
}

export default App;
