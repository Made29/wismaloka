import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import LoginPage from './views/LoginPage';
import HomePage from './views/HomePage';
import CreatePage from './views/CreatePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/addNewPost" element={<CreatePage />} />
      </Routes>
    </div>
  );
}

export default App;
