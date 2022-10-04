import React from 'react';
import Navbar from '../../components/navbar/Navbar.js';
import SidePanel from '../../components/sidePanel/SidePanel.js';
import Widget from '../../components/widget/Widget.js';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <SidePanel />
            <div className='main-container'>
                <Navbar />
                <div className="widgets">
                    <Widget />
                    <Widget />
                    <Widget />
                    <Widget />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
