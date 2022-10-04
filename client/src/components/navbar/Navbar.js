import React from 'react'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='searchbar'>
                    <input type="text" placeholder="Search" />
                </div>
                <div className='links'>
                    <div className='link'>ONE</div>
                    <div className='link'>TWO</div>
                    <div className='link'>THREE</div>
                    <div className='link'>FOUR</div>
                    <div className='link'>FIVE</div>
                    <div className='link'>SIX</div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
