import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/homePage/home';
import { Footer } from './layout/footer/footer';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;