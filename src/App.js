import logo from './logo.svg';
import './App.css';
import Navbar from './navigation/navbar';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/homePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
