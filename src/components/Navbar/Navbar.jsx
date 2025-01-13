import React from 'react';
import NavItems from './NavItems';
import NavLogo from './NavLogo';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="nav-section ">

            <div className="nav-item">
                <img src="./src/assets/j.png" alt="img" width={"100px"} height={"100px"} />

                <NavItems />
            </div>
        </div>
    );
}

export default Navbar;
