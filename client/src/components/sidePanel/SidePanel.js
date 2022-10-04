import React from 'react'

const SidePanel = () => {
  return (
    <div className='side-panel'>
      <div className='main-logo'><span className='logo'>Rental Properties</span></div>
      <div className='center-list'>
        <ul>
          <p className='li-label'>Main</p>
          <li>
            <p>Dashboard</p>
          </li>
          <li>
            <p>One</p>
          </li>
          <li>
            <p>Two</p>
          </li>
          <p className='li-label'>User</p>
          <li>
            <p>Profile</p>
          </li>
          <li>
            <p>Logout</p>
          </li>
        </ul>
      </div>
      <div className='bottom-options'>Options</div>
    </div>
  )
}

export default SidePanel
