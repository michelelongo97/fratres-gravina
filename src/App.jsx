import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import ChiSiamoPage from "./pages/ChiSiamoPage";
import DonazionePage from "./pages/DonazionePage";
import EventiPage from "./pages/EventiPage";
import EventDetailPage from "./pages/EventDetailPage";
import ContattiPage from "./pages/ContattiPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import PageNotFound from "./pages/PageNotFound";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="chi-siamo" element={<ChiSiamoPage />} />
          <Route path="donazione" element={<DonazionePage />} />
          <Route path="eventi" element={<EventiPage />} />
          <Route path="eventi/:id" element={<EventDetailPage />} />
          <Route path="contatti" element={<ContattiPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
