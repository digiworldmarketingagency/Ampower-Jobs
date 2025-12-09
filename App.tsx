import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Events } from './pages/Events';
import { Resources } from './pages/Resources';
import { CandidateRegister } from './pages/register/CandidateRegister';
import { CorporateRegister } from './pages/register/CorporateRegister';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { Login } from './pages/auth/Login';

// Wrapper to conditionally render Layout
const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const noLayoutPaths = ['/admin/dashboard', '/login'];
  
  // Basic check if current path starts with excluded paths
  const shouldHideLayout = noLayoutPaths.some(path => location.pathname.startsWith(path));

  if (shouldHideLayout) {
    return <>{children}</>;
  }

  return <Layout>{children}</Layout>;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/register/candidate" element={<CandidateRegister />} />
          <Route path="/register/corporate" element={<CorporateRegister />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </LayoutWrapper>
    </HashRouter>
  );
};

export default App;
