import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const brandStyle = { color: '#ffffff' };

const NavBar = () => {
    return (
        <>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand style={brandStyle}>Earthquakes 24hr Monitor</NavbarBrand>
            </Navbar>
        </>
    );
};

export default NavBar;
