import './App.css';
import { Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import AccountOverview from './pages/AccountOverview';
import Wallet from './pages/Wallet';
import Deposit from './pages/Deposit';
import Convert from './pages/Convert';
import Referral from './pages/Referral';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/account-overview' element={<AccountOverview />} />
      <Route path='/balance' element={<Wallet />} />
      <Route path='/deposit' element={<Deposit />} />
      <Route path='/convert' element={<Convert />} />
      <Route path='/convert' element={<Referral />} />
    </Routes>
  );
}

export default App;
