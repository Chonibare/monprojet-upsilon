// src/App.tsx
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Accueil from './components/Accueil';
import Apropos from './components/Apropos';
import Services from './components/Services';
import Casclients from './components/Casclients';
import UpsilonChat from './components/Upsilonchat';
import { initGA, trackPage } from "./Analytics";

// Hook pour tracker les changements de page
const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    trackPage(location.pathname);
  }, [location]);
};

const AppRoutes: React.FC = () => {
  usePageTracking(); // Track automatique des pages
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/apropos" element={<Apropos />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Casclients" element={<Casclients />} />
      <Route path="/Upsilonchat" element={<UpsilonChat />} />
    </Routes>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    initGA('G-Q2HFFFPMZM'); // Remplace par ton ID GA4
  }, []);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;