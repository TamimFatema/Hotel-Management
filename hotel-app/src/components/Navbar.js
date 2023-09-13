import React, { Component } from 'react'
import { FaAlignCenter } from 'react-icons/fa'
import { Outlet, Link } from 'react-router-dom'


export default class Navbar extends Component {
    state = {
        isOpen: false
    }
    handToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        return (
            <>
                <nav className='navbar'>
                    <div className='nav'>
                        <div className='nav-header'>

                            <button type='button' className='nav-btn' onClick={this.handToggle}><FaAlignCenter className='nav-icon'></FaAlignCenter></button>
                        </div>
                        <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                            <li> <Link to="/">Home</Link></li>
                            <li> <Link to="/rooms">Rooms</Link></li>
                            <li> <Link to="/booknow">Book Now</Link></li>
                            <li> <Link to="/contact">Contact Us</Link></li>

                        </ul>
                    </div>

                </nav>
                <Outlet />
            </>
        )
    }
}
