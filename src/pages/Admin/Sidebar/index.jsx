import React, { useEffect, useState } from 'react'
import './sidebar.css'
import { useNavigate, useLocation } from "react-router-dom";
import headerLogo from '../../../assets/admin-images/Logo.png'
import dashboardLogo from '../../../assets/admin-images/dashboard-inactive.png'
import usersLogo from '../../../assets/admin-images/user-inactive.png'
import eventsLogo from '../../../assets/admin-images/events-inactive.png'
import membershipLogo from '../../../assets/admin-images/membership-inactive.png'
import adsLogo from '../../../assets/admin-images/ads-inactive.png'
import {Offcanvas, Button} from 'react-bootstrap'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate()
  const location = useLocation()
  const [path, setPath] = useState(location.pathname)

  useEffect(() => {
    setPath(location.pathname)
  },[location.pathname])

  return (
    // <div className='admin-sidebar'>
    //   <img src={headerLogo} height="50px" />
    //   <div className='drawer-menu-container'>
    //     <div className={`drawer-item ${path == "/admin/dashboard" ? 'selected' : ''}`} onClick={() => navigate('/admin/dashboard')}>
    //       <span className='d-inline-block mr-1'>
    //       <img src={dashboardLogo} width="20px" height="18px" />
    //       </span>
    //       <span className='drawer-item-menu'>Dashboard</span>
    //     </div>
    //     <div className={`drawer-item ${path == "/admin/users" ? 'selected' : ''}`} onClick={() => navigate('/admin/users')}>
    //       <span className='d-inline-block mr-1' >
    //       <img src={usersLogo} width="16px" height="20px" />
    //       </span>
    //       <span className='drawer-item-menu'>Users</span>
    //     </div>
    //     <div className={`drawer-item ${path == "/admin/events" ? 'selected' : ''}`} onClick={() => navigate('/admin/events')}>
    //       <span className='d-inline-block mr-1' >
    //       <img src={eventsLogo} width="19px" height="13px" />
    //       </span>
    //       <span className='drawer-item-menu'>Events</span>
    //     </div>
    //     <div className={`drawer-item ${path == "/admin/membership" ? 'selected' : ''}`} onClick={() => navigate('/admin/membership')}>
    //       <span className='d-inline-block mr-1' >
    //       <img src={membershipLogo} width="16px" height="24px" />
    //       </span>
    //       <span className='drawer-item-menu'>Membership</span>
    //     </div>
    //     <div className={`drawer-item ${path == "/admin/ads" ? 'selected' : ''}`} onClick={() => navigate('/admin/ads')}>
    //       <span className='d-inline-block mr-1' >
    //       <img src={adsLogo} width="20px" height="18px" />
    //       </span>
    //       <span className='drawer-item-menu'>Ads</span>
    //     </div>        
    //   </div>
    // </div>
    <>
    <div className="toggle" onClick={handleShow}>
        <span></span>
        <span></span>
        <span></span>
    </div>
        <Offcanvas show={show} onHide={handleClose} className="admin-sidebar" scroll>
        <Offcanvas.Header closeButton>
        <img src={headerLogo} height="50px" />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='drawer-menu-container'>
        <div className={`drawer-item ${path == "/admin/dashboard" ? 'selected' : ''}`} onClick={() => navigate('/admin/dashboard')}>
          <span className='d-inline-block mr-1'>
         <img src={dashboardLogo} width="20px" height="18px" />
         </span>
         <span className='drawer-item-menu'>Dashboard</span>
       </div>
       <div className={`drawer-item ${path == "/admin/users" ? 'selected' : ''}`} onClick={() => navigate('/admin/users')}>
         <span className='d-inline-block mr-1' >
         <img src={usersLogo} width="16px" height="20px" />
          </span>
         <span className='drawer-item-menu'>Users</span>
         </div>
       <div className={`drawer-item ${path == "/admin/events" ? 'selected' : ''}`} onClick={() => navigate('/admin/events')}>
          <span className='d-inline-block mr-1' >
          <img src={eventsLogo} width="19px" height="13px" />
        </span>
        <span className='drawer-item-menu'>Events</span>
       </div>
      <div className={`drawer-item ${path == "/admin/membership" ? 'selected' : ''}`} onClick={() => navigate('/admin/membership')}>
        <span className='d-inline-block mr-1' >
          <img src={membershipLogo} width="16px" height="24px" />
          </span>
          <span className='drawer-item-menu'>Membership</span>
       </div>
       <div className={`drawer-item ${path == "/admin/ads" ? 'selected' : ''}`} onClick={() => navigate('/admin/ads')}>
          <span className='d-inline-block mr-1' >
        <img src={adsLogo} width="20px" height="18px" />
        </span>
         <span className='drawer-item-menu'>Ads</span>
       </div>        
       </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Sidebar