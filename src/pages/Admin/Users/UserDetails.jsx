import React from 'react'
import './Users.css'
import userIcon from '../../../assets/admin-images/user-detail-icon.png'

function UserDetails() {
  return (
    <div className='user-details'>
        <div className='header-title'>
            View User Info
        </div>
        <div className='user-details-container'>
            <div className='user-image-section'>
                <img src={userIcon} height="146px" />
                <div className='user-name-section'>
                    <span className='user-name'>Eleanor Pena</span>
                    <span className='user-prof'>Web Developer</span>
                </div>
            </div>
            <div className='user-info-section'>
                <div className='left-info-section'>
                    <label className='info-label'>First Name</label>
                    <input type="text" className='info-input' />
                    <label className='info-label'>Email Address</label>
                    <input type="text" className='info-input' />
                    <label className='info-label'>State & City</label>
                    <input type="text" className='info-input' />
                    <label className='info-label'>Company</label>
                    <input type="text" className='info-input' />
                    <label className='info-label'>Industry</label>
                    <input type="text" className='info-input' />
                </div>
                <div className='right-info-section'>
                    <label className='info-label'>Last Name</label>
                    <input type="text" className='info-input' />
                    <label className='info-label'>Phone Number</label>
                    <input type="text" className='info-input' />
                    <label className='info-label'>Country</label>
                    <input type="text" className='info-input' />
                    <label className='info-label'>Job Title</label>
                    <input type="text" className='info-input' />
                    <label className='info-label'>Event in which user is registered</label>
                    <input type="text" className='info-input' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserDetails