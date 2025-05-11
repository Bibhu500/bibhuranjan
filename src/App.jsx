import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PMTransition from './pages/PMTransition';
import UserBehavior from './pages/UserBehavior';
import PMAI from './pages/PMAI';
import FutureJobs from './pages/FutureJobs';
import RapidoCaseStudy from './pages/RapidoCaseStudy';
import EcommerceCheckoutRCA from './pages/EcommerceCheckoutRCA';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PMtransition" element={<PMTransition />} />
        <Route path="/userbehavior" element={<UserBehavior />} />
        <Route path="/pmai" element={<PMAI />} />
        <Route path="/futurejobs" element={<FutureJobs />} />
        
        {/* Case Studies Routes */}
        <Route path="/case-studies/rapido-driver-rating" element={<RapidoCaseStudy />} />
        <Route path="/case-studies/ecommerce-checkout" element={<EcommerceCheckoutRCA />} />
        <Route path="/case-studies/app-crash-analysis" element={<RapidoCaseStudy />} />
        <Route path="/case-studies/wallet-redesign" element={<RapidoCaseStudy />} />
        <Route path="/case-studies/healthcare-app-design" element={<RapidoCaseStudy />} />
        <Route path="/case-studies/product-page-redesign" element={<RapidoCaseStudy />} />
        <Route path="/case-studies/ecommerce-conversion-rate" element={<RapidoCaseStudy />} />
        <Route path="/case-studies/saas-retention" element={<RapidoCaseStudy />} />
        <Route path="/case-studies/app-engagement" element={<RapidoCaseStudy />} />
        <Route path="/case-studies/subscription-strategy" element={<RapidoCaseStudy />} />
        <Route path="/case-studies/ai-prioritization" element={<RapidoCaseStudy />} />
        <Route path="/case-studies/product-launch" element={<RapidoCaseStudy />} />
      </Routes>
    </Router>
  );
}

export default App;
