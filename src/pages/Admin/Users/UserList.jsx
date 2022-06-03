import React from 'react'
import './Users.css'
import userIcon from '../../../assets/admin-images/user-icon.png'
import viewIcon from '../../../assets/admin-images/view-icon.png'
import editIcon from '../../../assets/admin-images/edit-icon.png'
import deleteIcon from '../../../assets/admin-images/delete-icon.png'
import { useNavigate } from 'react-router-dom'

function UserList() {
  const navigate = useNavigate()

  return (
    <div className='user-list-card'>
        <img src={userIcon} className="user-icon" />
        <div className='user-name-div'>
            <span className='user-name'>Eleanor Pena</span>
            <span className='user-profession'>Dog Trainer</span>
        </div>
        <div className='user-info-div'>
            Lorem ipsum dolor sit amet
        </div>
        <div className='user-action-div'>
            <img src={viewIcon} style={{ marginRight: 22 }} />
            <span style={{ cursor: 'pointer' }} onClick={() => navigate('/admin/users/details')}>
                View
            </span>

            <img src={editIcon} style={{ marginRight: 22, marginLeft: 58 }} />
            <span style={{ cursor: 'pointer' }}>
                Edit
            </span>

            <img src={deleteIcon} style={{ marginRight: 22, marginLeft: 58 }} />
            <span style={{ cursor: 'pointer' }}>
                Delete
            </span>
        </div>
    </div>
  )
}

export default UserList