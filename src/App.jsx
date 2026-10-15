import { lazy, Suspense } from 'react';
import Navbar from './navigation/navbar.jsx';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/homePage.jsx';

// The animated background is large (it includes a 3D library), so it is
// downloaded separately, alongside the page instead of before it. Until it
// arrives, a plain gradient in the same colours is shown behind the page.
// If the download fails, the plain gradient simply stays.
const gradientDownload = import('./components/shadergradient.jsx')
  .catch(() => ({ default: () => null }));
const GradientBackground = lazy(() => gradientDownload);

const fallbackBackground = {
  position: 'fixed',
  inset: 0,
  zIndex: -2,
  background: 'linear-gradient(135deg, #ebedff 0%, #f4daf8 50%, #ffdbd9 100%)',
};

function App() {
  return (
    <div className="App">
      <div style={fallbackBackground} aria-hidden="true" />
      <Suspense fallback={null}>
        <GradientBackground />
      </Suspense>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
