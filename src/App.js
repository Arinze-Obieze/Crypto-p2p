import './App.css';
import { Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import AccountOverview from './pages/AccountOverview';
import Wallet from './pages/Wallet';
import Deposit from './pages/Deposit';
import Convert from './pages/Convert';
import Referral from './pages/Referral';
import Market from './pages/market';
import Withdraw from './pages/Withdraw';
import AdminDashboard from './Admin/Dashboard';
import BUY from './pages/BUY';
import SELL from './pages/SELL';
import Appeal from './pages/appeal';
import Message from './pages/Message';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/account-overview' element={<AccountOverview />} />
      <Route path='/balance' element={<Wallet />} />
      <Route path='/deposit' element={<Deposit />} />
      <Route path='/convert' element={<Convert />} />
      <Route path='/referral' element={<Referral />} />
      <Route path='/market' element={<Market />} />
      <Route path='/withdraw' element={<Withdraw />} />
      <Route path='/admin/dashboard' element={<AdminDashboard />} />
      <Route path='/buy' element={<BUY />} />
      <Route path='/sell' element={<SELL />} />
      <Route path='/appeal' element={<Appeal />} />
      <Route path='/message' element={<Message />} />
    </Routes>
  );
}

export default App;
