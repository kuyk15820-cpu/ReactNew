import React, { useEffect, useState } from 'react';

const API_URL = 'https://f1x3r.org/api/webserver/app/get_dashboard_stats.php';

// 1. กำหนด Interface สำหรับข้อมูลที่ส่งมาจาก PHP API
interface DashboardStats {
  devices: {
    total: number;
  };
  packages: {
    total: number;
    active: number;
    maintenance: number;
    deleted: number;
  };
  keys: {
    total: number;
    active: number;
    banned: number;
    expired: number;
    deleted: number;
  };
}

export default function Dashboard() {
  // 2. กำหนด Type ให้ State รองรับทั้ง DashboardStats และ null
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          setStats(data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching dashboard stats:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ color: '#fff', padding: '24px' }}>กำลังโหลดข้อมูล Dashboard...</div>;
  }

  return (
    <div className="main-content">
      <h2 className="page-title">Dashboard Overview</h2>

      {/* 📱 Devices Section */}
      <div className="stats-section">
        {/* แก้ class เป็น className */}
        <div className="stats-title"><i className="fa-solid fa-mobile-screen-button"></i> สถิติการผูกอุปกรณ์</div>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-info">
              <span className="title">Devices</span>
              <span className="value">{stats?.devices.total.toLocaleString() ?? 0}</span>
              <span className="subtitle">Total Device</span>
            </div>
            <div className="stat-icon-box icon-purple"><i className="fa-solid fa-mobile-screen"></i></div>
          </div>
        </div>
      </div>

      {/* 📦 Packages Section */}
      <div className="stats-section">
        <div className="stats-title"><i className="fa-solid fa-box-archive"></i> สถิติ Package ทั้งหมด</div>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-info">
              <span className="title">Package ทั้งหมด</span>
              <span className="value">{stats?.packages.total.toLocaleString() ?? 0}</span>
              <span className="subtitle">Total Package</span>
            </div>
            <div className="stat-icon-box icon-blue"><i className="fa-solid fa-boxes-stacked"></i></div>
          </div>

          <div className="stat-card">
            <div className="stat-info">
              <span className="title">ใช้งานได้ (Active)</span>
              <span className="value">{stats?.packages.active.toLocaleString() ?? 0}</span>
              <span className="subtitle">Active Package</span>
            </div>
            <div className="stat-icon-box icon-green"><i className="fa-solid fa-circle-check"></i></div>
          </div>

          <div className="stat-card">
            <div className="stat-info">
              <span className="title">ปิดปรับปรุง (Maintenance)</span>
              <span className="value">{stats?.packages.maintenance.toLocaleString() ?? 0}</span>
              <span className="subtitle">Maintenance</span>
            </div>
            <div className="stat-icon-box icon-yellow"><i className="fa-solid fa-wrench"></i></div>
          </div>

          <div className="stat-card">
            <div className="stat-info">
              <span className="title">ถูกลบแล้ว (Deleted)</span>
              <span className="value">{stats?.packages.deleted.toLocaleString() ?? 0}</span>
              <span className="subtitle">Deleted Package</span>
            </div>
            <div className="stat-icon-box icon-red"><i className="fa-solid fa-trash"></i></div>
          </div>
        </div>
      </div>

      {/* 🔑 Keys Section */}
      <div className="stats-section">
        <div className="stats-title"><i className="fa-solid fa-key"></i> สถิติ Key / License</div>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-info">
              <span className="title">Total Keys</span>
              <span className="value">{stats?.keys.total.toLocaleString() ?? 0}</span>
              <span className="subtitle">Total Keys</span>
            </div>
            <div className="stat-icon-box icon-green"><i className="fa-solid fa-key"></i></div>
          </div>

          <div className="stat-card">
            <div className="stat-info">
              <span className="title">พร้อมใช้งาน (Active)</span>
              <span className="value">{stats?.keys.active.toLocaleString() ?? 0}</span>
              <span className="subtitle">Active Key</span>
            </div>
            <div className="stat-icon-box icon-blue"><i className="fa-solid fa-shield-check"></i></div>
          </div>

          <div className="stat-card">
            <div className="stat-info">
              <span className="title">ถูกระงับ/แบน (Banned)</span>
              <span className="value">{stats?.keys.banned.toLocaleString() ?? 0}</span>
              <span className="subtitle">Banned Key</span>
            </div>
            <div className="stat-icon-box icon-red"><i className="fa-solid fa-user-slash"></i></div>
          </div>

          <div className="stat-card">
            <div className="stat-info">
              <span className="title">หมดอายุแล้ว (Expired)</span>
              <span className="value">{stats?.keys.expired.toLocaleString() ?? 0}</span>
              <span className="subtitle">Expired Key</span>
            </div>
            <div className="stat-icon-box icon-yellow"><i className="fa-solid fa-clock-rotate-left"></i></div>
          </div>

          <div className="stat-card">
            <div className="stat-info">
              <span className="title">ประวัติถูกลบ (Deleted)</span>
              <span className="value">{stats?.keys.deleted.toLocaleString() ?? 0}</span>
              <span className="subtitle">Deleted History</span>
            </div>
            <div className="stat-icon-box icon-gray"><i className="fa-solid fa-folder-minus"></i></div>
          </div>
        </div>
      </div>
    </div>
  );
}
