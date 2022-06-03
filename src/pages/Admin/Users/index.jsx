import React from 'react'
import './Users.css'
import userBanner from '../../../assets/admin-images/user-banner.png'
import UserList from './UserList'
import arrowDown from '../../../assets/admin-images/arrow-down.png'
import {Container, Row, Col, Image, Card, Table} from 'react-bootstrap';
import userIcon from '../../../assets/admin-images/user-icon.png'
import viewIcon from '../../../assets/admin-images/view-icon.png'
import editIcon from '../../../assets/admin-images/edit-icon.png'
import deleteIcon from '../../../assets/admin-images/delete-icon.png'
function Users() {
  const UserList = [
    { name:"name", email:"email@gmail.com"},
    { name:"name", email:"email@gmail.com"},
    { name:"name", email:"email@gmail.com"},
    { name:"name", email:"email@gmail.com"},
    { name:"name", email:"email@gmail.com"},
    { name:"name", email:"email@gmail.com"},
  ]
  return (
    <div className='admin-users'>
      <Container>
      <div className='header-title'>
        Users
      </div>
      <Card>
        <Card.Body>


      <Row>
      <Col lg={6}>
        <Image src={userBanner} fluid className='mt-3'/>
        </Col>
        <Col lg={6}>
        <h4 className='text-center mt-5 fw-bold'>Add New User</h4>
        <div className='file-upload'>
            <input type="file" style={{ display: 'none' }} />
            <span className='file-upload-placeholder'>Upload csv file of user</span>
            <span className='file-upload-btn'>Upload</span>
          </div>
 
        {/* <div className='add-user-banner-content'> */}
          {/* <span className='add-user-banner-title'>Add New Users</span>
          <div className='file-upload'>
            <input type="file" style={{ display: 'none' }} />
            <span className='file-upload-placeholder'>Upload csv file of user</span>
            <span className='file-upload-btn'>Upload</span>
          </div> */}
        {/* </div> */}
        
        </Col>
      
      </Row>
      </Card.Body>
      </Card>
      <div className='manage-users-section'>
        <div className='manage-title'>Manage All Users</div>
        <div className='list-users-title'>
          List of csv Files of users
        </div>
        <Container style={{overflowX:"scroll"}} className="bg-light">
          {/* <UserList />
          <UserList />
          <UserList />
          <UserList />
          <UserList /> */}
          <Table responsive >
            <tbody>
              {UserList.map((list)=>{return(<>
              <tr>
                <td><img src={userIcon} alt='usericon' /></td>
                <td>{list.name}</td>
                <td>{list.email}</td>
                <td><img src={viewIcon} alt='' /></td>
                <td><img src={editIcon} alt='' /></td>
                <td><img src={deleteIcon} alt='' /></td>
              </tr>
              </>)})}
            </tbody>
          </Table>
        </Container>
        <div className='view-more-btn-container'>
        <span className='view-more-btn'>View More <img src={arrowDown} style={{ transform: 'rotate(-90deg)', marginLeft: 5 }} /></span>
        </div>
      </div>
      </Container>
    </div>
  )
}

export default Users