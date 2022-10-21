import React from 'react'

const SidePanel = () => {
  return (
    <div className='side-panel'>
      <div className='main-logo'><span className='logo'>Rental Properties</span></div>
      <div className='center-list'>
        <ul>
          <p className='li-label'>Main</p>
          <li>
            <p className='li-item'>Dashboard</p>
          </li>
          <li>
            <p className='li-item'>Buildings</p>
          </li>
          <li>
            <p className='li-item'>Apartments</p>
          </li>
          <li>
            <p className='li-item'>Tenants</p>
          </li>
          <p className='li-label'>User</p>
          <li>
            <p className='li-item'>Profile</p>
          </li>
          <li>
            <p className='li-item'>Messages</p>
          </li>
          <li>
            <p className='li-item'>Tickets</p>
          </li>
        </ul>
      </div>
      <div className='bottom-options'>
        <div className='options'></div>
        <div className='options'></div>
      </div>
    </div>
  )
}

export default SidePanel
