import React from "react";
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  WorldIcon,
  Flag,
  Home,
  Politics,
  Business,
  Health,
} from "./NavbarElements";

import SearchBar from "./SearchBar";
// import PublicIcon from "@mui/icons-material/Public";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            <Home />
            Home
          </NavLink>
          <NavLink to="/National" activeStyle>
            <Flag />
            Nigerian
          </NavLink>
          <NavLink activeStyle>
            <WorldIcon />
            Environment
          </NavLink>
          <NavLink activeStyle>
            <Politics />
            Politics
          </NavLink>
          <NavLink activeStyle>
            <Business />
            Business
          </NavLink>
          <NavLink activeStyle>
            <Health />
            Health
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink>Sign In</NavBtnLink>
          <NavBtnLink>Sign Up</NavBtnLink>
        </NavBtn>
        {/* <SearchBar /> */}
      </Nav>
    </>
  );
};

export default Navbar;
