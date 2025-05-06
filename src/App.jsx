import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PMTransition from './pages/PMTransition';
import UserBehavior from './pages/UserBehavior';
import PMAI from './pages/PMAI';
import FutureJobs from './pages/FutureJobs';
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
      </Routes>
    </Router>
  );
}

export default App;
