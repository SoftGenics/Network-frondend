import React, { useEffect, useState } from 'react'
import './admin.css'
import { useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import Dashboard from './Dashboard'
import Users from './Users'
import Events from './Events'
import Membership from './Membership'
import Ads from './Ads'
import UserDetails from './Users/UserDetails'


function AdminLayout() {
  const location = useLocation()
  const [path, setPath] = useState(location.pathname)

  useEffect(() => {
    setPath(location.pathname)
  },[location.pathname])

  return (
    <div className='admin-layout'>
        <Sidebar />
        <Header />

        {path == "/admin/dashboard" && <Dashboard />}
        {path == "/admin/users" && <Users />}
        {path == "/admin/events" && <Events />}
        {path == "/admin/membership" && <Membership />}
        {path == "/admin/ads" && <Ads />}
        {path == "/admin/users/details" && <UserDetails />}

    </div>
  )
}

export default AdminLayout