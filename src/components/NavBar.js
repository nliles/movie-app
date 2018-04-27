import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class NavBar extends Component {

    render() {
        return (
            <Nav>
                <NavItem>
                    <NavLink href="/">Movies</NavLink>
                </NavItem>
            </Nav>
        )
    }

}

export default NavBar;