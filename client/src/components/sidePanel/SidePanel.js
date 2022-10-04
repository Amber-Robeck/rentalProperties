import React from 'react'

const SidePanel = () => {
  return (
    <div className='side-panel'>
      <div className='main-logo'><span className='logo'>Rental Properties</span></div>
      <div className='center-list'>
        <ul>
          <li>
            <p>Dashboard</p>
          </li>
          <li>
            <p>One</p>
          </li>
          <li>
            <p>Two</p>
          </li>
        </ul>
      </div>
      <div className='bottom-options'>Options</div>
    </div>
  )
}

export default SidePanel
