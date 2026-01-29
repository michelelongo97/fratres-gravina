import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import ChiSiamoPage from "./pages/ChiSiamoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="chi-siamo" element={<ChiSiamoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
