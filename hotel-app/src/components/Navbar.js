import React, { Component } from 'react'
import logo from '../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
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
                            <Link to="/">
                                <img src={logo} alt="Beach Resort"></img>
                            </Link>
                            <button type='button' className='nav-btn' onClick={this.handToggle}><FaAlignRight className='nav-icon'></FaAlignRight></button>
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
