import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/common/navbar';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import SolutionsPage from './pages/solution';
import Footer from './components/common/footer';
import FarmerPage from './pages/farmer';
import CooperativePage from './pages/cooperative';
import DemoPage from './pages/demo';

const AppContent: React.FC = () => {
  const location = useLocation();
  const isAuthRoute = location.pathname.startsWith('/auth');

  return (
    <>
      {!isAuthRoute && <Navbar />}
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/solution" Component={SolutionsPage} />
        <Route path='/auth/farmer' Component={FarmerPage}/>
        <Route path='/demo' Component={DemoPage} />
        <Route path='/auth/cooperative' Component={CooperativePage}/>
      </Routes>
      {!isAuthRoute && <Footer />}
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;