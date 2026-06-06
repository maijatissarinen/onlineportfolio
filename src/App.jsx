
import Navbar from './navigation/navbar.jsx';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/homePage.jsx';
import GradientBackground from './components/shadergradient.jsx';

function App() {
  return (
    <div className="App">
      <GradientBackground />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
