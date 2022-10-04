import React from 'react';
import Navbar from '../../components/navbar/Navbar.js';
import SidePanel from '../../components/sidePanel/SidePanel.js';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <SidePanel />
            <div className='main-container'>
                <Navbar />
                main
            </div>
        </div>
    )
}

export default Dashboard
