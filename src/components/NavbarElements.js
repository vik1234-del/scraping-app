// import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import RecyclingOutlinedIcon from "@mui/icons-material/RecyclingOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export const Nav = styled.nav`
  background: #8e9aad;
  height: 70px;
  display: flex;
  padding: 0.2rem calc((100vw - 1000px) / 2);
`;

export const WorldIcon = styled(RecyclingOutlinedIcon)`
  margin-right: 7px;
`;

export const Home = styled(HomeOutlinedIcon)`
  margin-right: 7px;
`;

export const Flag = styled(FlagOutlinedIcon)`
  margin-right: 7px;
`;

export const Politics = styled(BalanceOutlinedIcon)`
  margin-right: 7px;
`;

export const Business = styled(BusinessCenterOutlinedIcon)`
  margin-right: 7px;
`;

export const Health = styled(LocalHospitalOutlinedIcon)`
  margin-right: 7px;
`;

export const NavLink = styled(Link)`
  color: white;
  font-family: "Figtree", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Figtree", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 15px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 40%;
  &:hover {
    transition: all 0.1s ease-in-out;
    color: #808080;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 2px;
  margin-left: auto;
  /* Third Nav */
  /* justify-content: flex-end;
width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: black;
  padding: 10px 22px;
  color: white;
  outline: none;
  border: none;
  font-family: "Figtree", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Figtree", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.1s ease-in-out;
    background: #808080;
    // color: #808080;
  }
`;

export const Icon = styled(SearchOutlinedIcon)`
  background-color: green;
  fontsize: large;
`;
