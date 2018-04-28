import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const  NavBar = () => {
    return (
            <div>
                <Breadcrumb className="nav-bar">
                    <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                    <BreadcrumbItem><a href="/">Movies</a></BreadcrumbItem>
                </Breadcrumb>
            </div>
        )
  }

export default NavBar;