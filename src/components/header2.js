import React from "react";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/dataAction";

import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const drawerWidth = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  ? "66vw"
  : "25vw";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

export const Header = ({ handleOpen, noJoin }) => {
  const classes = useStyles();
  const history = useHistory();
  const [drawerState, setDrawerState] = React.useState(false);
  const user = useSelector((state) => state.getDataReducer.user);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // dispatch(user(9));
  }, []);

  const toggleDrawer = (open) => {
    // console.log(open);
    // if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //     return;
    // }

    setDrawerState(open);
  };

  const Logout = () => {
    dispatch(logout());
    localStorage.clear()
    window.location.href = "/";
  };
  return (
    <Navbar bg="white" expand="lg" className="p-0">
      <Container className="headbar2">
        <Link to="/" className="text-dark text-decoration-none">
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/logo.png"}
            alt=""
            width="70"
          />
          OngsterCare
        </Link>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
        <Nav className="ml-auto d-flex align-items-center conjusted-fix">
          <Link to='/post-job'>
            <Button variant="flat" >Post a Job</Button>
          </Link>
          <div className="position-relative px-2 cursor-pointer">
            <NotificationsIcon
              className="mx-2"
              style={{ transform: "rotate(45deg)" }}
            />
            <img
              className="dot"
              src={process.env.PUBLIC_URL + "/assets/icons/Ellipse 36.png"}
            />
          </div>

          <IconButton
            type="submit"
            style={{ outline: "none", width: "fit-content" }}
            onClick={(_) => history.push("/caregiver")}
          >
            <SearchIcon
              fontSize="medium"
              className="searchIcon"
              style={{ color: "#28ACE2" }}
            />
          </IconButton>

          <IconButton
            style={{ outline: "none" }}
            onClick={(_) => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Nav>
      </Container>

      <SwipeableDrawer
        className={classes.drawer}
        anchor="right"
        open={drawerState}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className="position-relative">
          <span
            className="d-flex justify-content-center"
            style={{
              width: 44,
              height: 44,
              backgroundColor: "white",
              borderRadius: "50%",
              position: "absolute",
              top: 30,
              left: 0 /*-25*/,
            }}
          >
            <IconButton
              style={{ outline: "none" }}
              onClick={() => toggleDrawer(false)}
            >
              <CloseIcon />
            </IconButton>
          </span>
          <div className="w-100 text-center mt-3">
            <span style={{ width: 80, height: 80 }}>
              <img
                alt=""
                style={{
                  width: 80,
                  height: 80,
                  marginBottom: "1rem",
                  borderRadius: 160,
                }}
                src={
                  user
                    ? user.image && `https://api.ongstercare.com${user.image}`
                    : `${process.env.PUBLIC_URL}/assets/icons/no-img.png`
                }
              />
            </span>
            {user && (
              <p className="text-capitalize">
                {user.firstname} {user.lastname}
              </p>
            )}
            <Link to="/gopremium">
              <Button variant="flat">Upgrade Plan</Button>
            </Link>
          </div>
          <div className="pl-5">
            <Link to="/best-match" onClick={() => toggleDrawer(false)}>
              <p className="text-muted py-2 cursor-pointer">Home</p>
            </Link>
            <Link to="/applicant-detail" onClick={() => toggleDrawer(false)}>
              <p className="text-muted py-2 cursor-pointer">My Caregiver</p>
            </Link>
            <Link to="/job" onClick={() => toggleDrawer(false)}>
              <p className="text-muted py-2 cursor-pointer">My Job</p>
            </Link>
            <Link to="/safety" onClick={() => toggleDrawer(false)}>
              <p className="text-muted  py-2 cursor-pointer">Safety</p>
            </Link>
            <Link to="/chat" onClick={() => toggleDrawer(false)}>
              <p className="text-muted  py-2 cursor-pointer">Messages</p>
            </Link>
            <Link to="/edit-profile" onClick={() => toggleDrawer(false)}>
              <p className="text-muted  py-2 cursor-pointer">My Profile</p>
            </Link>
            <Link to="/account-settings" onClick={() => toggleDrawer(false)}>
              <p className="text-muted  pt-2 cursor-pointer">Account Setting</p>
            </Link>
            <p>
              <hr />
            </p>
            {/* <p className="text-muted  pb-2 cursor-pointer">My Background Check</p> */}
            <p
              className="text-muted  py-2 cursor-pointer"
              onClick={() => toggleDrawer(false)}
            >
              My Payment
            </p>
            <p
              className="text-muted  py-2 cursor-pointer"
              onClick={() => toggleDrawer(false)}
            >
              Advice
            </p>
            <p
              className="text-muted  py-2 cursor-pointer"
              onClick={() => toggleDrawer(false)}
            >
              Help Center
            </p>
            <p className="cursor-pointer" onClick={Logout}>
              Logout
            </p>
          </div>
        </div>
      </SwipeableDrawer>
      <style type="text/css">
        {`
                .btn-flat {
                background-color: #28ace2;
                color: white;
                     }
                .btn-flat:hover {
                background-color: #28ace280;
                color: white;
                     }
                     .dot{
                            position: absolute;
                            top: 6px;
                            right: 2px;
                            padding: 5px 10px;
                            border-radius: 50%;
                         
                     }
                `}
      </style>
    </Navbar>
  );
};
