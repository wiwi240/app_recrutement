import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Profile from './pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header />
        <div className="layout">
          <Sidebar />
          <main className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
