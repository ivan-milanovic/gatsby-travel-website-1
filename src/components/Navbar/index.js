import React, {useState, useEffect} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {MobileIcon, Nav, NavbarContainer, NavIcon, NavItem, NavItemLink, NavLogo, NavMenu} from "./NavbarElements";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleClick = () => setClick(!click)


    const changeNav = () => {
        if(window.scrollY >= 80){
            setScroll(true);
        }else{
            setScroll(false);
        }
    };

    useEffect(() => {
        changeNav();
        window.addEventListener("scroll", changeNav);
    }, []);

    return (
        <>
            <IconContext.Provider value={{color: "#141414"}}>
                <Nav active={scroll} click={click}>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon />
                            EXPLOR
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars/>}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavItemLink to="/">Home</NavItemLink>
                            </NavItem>
                            <NavItem>
                                <NavItemLink to="/images">Images</NavItemLink>
                            </NavItem>
                            <NavItem>
                                <NavItemLink to="/destinations">Destinations</NavItemLink>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
