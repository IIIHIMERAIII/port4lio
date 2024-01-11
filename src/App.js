import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/homePage/home';
import { InfoPage } from './pages/infoPage.jsx/infoPage';

import { Footer } from './layout/footer/footer';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;