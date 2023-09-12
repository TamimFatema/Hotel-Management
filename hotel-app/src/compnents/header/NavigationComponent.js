import { Navbar, NavbarBrand, NavItem } from 'reactstrap'
import React from 'react'


const NavigationCompnent = () => {
    return (
        <div>
            <Navbar color="dark" dark>
                <NavbarToggler />
                <NavbarBrand href="/">reactstrap</NavbarBrand>

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/"></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>

        </div>
    )
}

export default NavigationCompnent
