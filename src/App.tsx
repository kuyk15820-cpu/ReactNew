import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
// import KeyManagement from './components/KeyManagement'
// import PackageManagement from './components/PackageManagement'
// import DeviceManagement from './components/DeviceManagement'

// กำหนด Type ของ Tab ทั้งหมดในระบบ
export type TabType = 'dashboard' | 'key' | 'device' | 'package'

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard')

  return (
    <div className="app-container">
      {/* Top Header Navbar */}
      <div className="top-navbar">
        <div className="navbar-brand">
          <i className="fa-solid fa-shield-halved" style={{ color: '#6366f1' }}></i> API PANEL
        </div>
        <div className="user-controls">
          <i className="fa-solid fa-moon"></i>
          <div className="user-avatar">A</div>
        </div>
      </div>

      {/* Dynamic Content Section */}
      <main className="main-viewport">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'key' && <div>หน้าจัดการ Key (รอไฟล์ key.php)</div>}
        {activeTab === 'device' && <div>หน้าจัดการ Device (รอไฟล์ device.php)</div>}
        {activeTab === 'package' && <div>หน้าจัดการ Package (รอไฟล์ package.php)</div>}
      </main>

      {/* Bottom Floating Capsule Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}

export default App
