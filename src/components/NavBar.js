import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class NavBar extends Component {

    render() {
        return (
            <div>
                <Breadcrumb className="nav_bar">
                    <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                    <BreadcrumbItem><a href="/">Movies</a></BreadcrumbItem>
                </Breadcrumb>
            </div>
        )
    }

}

export default NavBar;