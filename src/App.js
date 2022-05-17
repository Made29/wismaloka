import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import LoginPage from './views/LoginPage';
import HomePage from './views/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
