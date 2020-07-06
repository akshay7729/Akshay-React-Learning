import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Search from "./Search";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faShoppingBag,
  faBars
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <React.Fragment>
      <Navbar className="main-nav d-flex">
        <Navbar.Brand className="d-none d-sm-block">
          <Link to="/">React Learning</Link>
        </Navbar.Brand>
        <div className="d-block d-sm-none mob-mega-menu">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <Navbar.Brand className="d-block d-sm-none">
          <Link to="/">RL</Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </Nav>
        <Search />
        <Nav className="justify-content-end main-right-nav d-none d-sm-flex">
          <Nav.Link href="#home">
            <div className="main-right-nav-box text-center">
              <FontAwesomeIcon icon={faUser} />
              <div className="nav-right-icon-desc text-uppercase">Akshay</div>
            </div>
          </Nav.Link>
          <Nav.Link href="#features">
            <div className="main-right-nav-box text-center">
              <FontAwesomeIcon icon={faHeart} />
              <div className="nav-right-icon-desc text-uppercase">Wishlist</div>
            </div>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <div className="main-right-nav-box text-center">
              <FontAwesomeIcon icon={faShoppingBag} />
              <div className="nav-right-icon-desc text-uppercase">Bag</div>
            </div>
          </Nav.Link>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
