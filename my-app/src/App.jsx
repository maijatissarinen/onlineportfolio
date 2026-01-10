// import './App.css';
// import Navbar from './navigation/navbar';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/homePage.jsx';

function App() {
  return (
    <div className="App">
      <h1>Rendering</h1>
      {/*<Navbar /> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
