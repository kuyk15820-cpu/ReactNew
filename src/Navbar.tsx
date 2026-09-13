import React from 'react'
import { TabType } from './App'

interface NavbarProps {
  activeTab: TabType
  setActiveTab: (tab: TabType) => void
}

interface NavItem {
  id: TabType
  label: string
  icon: string
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navItems: NavItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fa-solid fa-border-all' },
    { id: 'key', label: 'Keys', icon: 'fa-solid fa-key' },
    { id: 'device', label: 'Devices', icon: 'fa-solid fa-laptop-mobile' },
    { id: 'package', label: 'Packages', icon: 'fa-solid fa-box-archive' },
  ]

  return (
    <div className="capsule-nav-container">
      <nav className="capsule-nav-bar">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`capsule-nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <i className={item.icon}></i>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}

export default Navbar
