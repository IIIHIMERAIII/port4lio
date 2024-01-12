import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from './pages/homePage/home';
import { InfoPage } from './pages/infoPage.jsx/infoPage';

import { Header } from './layout/header/Header';
import { Footer } from './layout/footer/footer';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* No Header on Home */}
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/info"
          element={
            <>
              {/* Header on InfoPage */}
              <Header />
              <InfoPage />
            </>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;