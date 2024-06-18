// import { useAuth } from './AuthContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useContext, useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { UserContext } from "../context";

export default function NavBar() {
  // const { isAuthenticated, login, logout } = useAuth();
  const { users } = useContext(UserContext);
  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  // const ctx = React.useContext(UserContext);
  // console.log('User: ', ctx.users);

  function loggedInUser() {
    return users.find(u => u.loggedIn === true) || false;
  }

  const renderTooltipForHomePage = props => (
    <Tooltip {...props}>This is the home page you land on when you open the app</Tooltip>
  );
  const renderTooltipForLoginPage = props => (
    <Tooltip {...props}>Here you can login to the app. The list of available accounts are listed in All Data page.</Tooltip>
  );
  const renderTooltipForDepositPage = props => (
    <Tooltip {...props}>Here you can deposit the money into the account of the logged in user.</Tooltip>
  );
  const renderTooltipForWidthdrawPage = props => (
    <Tooltip {...props}>Here you can withdraw the money into the account of the logged in user.</Tooltip>
  );
  const renderTooltipForAllDataPage = props => (
    <Tooltip {...props}>On this page you can see the list of registered users and once they log in, their transactions.</Tooltip>
  );

  const renderTooltipForCreateAccountPage = props => (
    <Tooltip {...props}>On this page you can register a new user in the app.</Tooltip>
  );

  return (

    <Navbar expand="lg" bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand>Front-End Bank App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <OverlayTrigger placement="bottom" overlay={renderTooltipForHomePage}>
              <Nav.Link href="#/home/" className={(url === "/home/" || url === "/" ? " active" : "")}>Home</Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={renderTooltipForLoginPage}>
              <Nav.Link href="#/login/">Login</Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={renderTooltipForAllDataPage}>
              <Nav.Link href="#/alldata/">All data</Nav.Link></OverlayTrigger>
            {loggedInUser() && (<>
              <OverlayTrigger placement="bottom" overlay={renderTooltipForDepositPage}>
                <Nav.Link href="#/deposit/">Deposit</Nav.Link></OverlayTrigger>
              <OverlayTrigger placement="bottom" overlay={renderTooltipForWidthdrawPage}>
                <Nav.Link href="#/withdraw/">Withdraw</Nav.Link></OverlayTrigger>
              <OverlayTrigger placement="bottom" overlay={renderTooltipForCreateAccountPage}>
                <Nav.Link href="#/createaccount/">Create account</Nav.Link></OverlayTrigger>
            </>)}
          </Nav>
          {loggedInUser() && (<>
            <Nav className="justify-content-end">
              <Navbar.Text>
                Logged in as: {loggedInUser()?.name}
              </Navbar.Text>
            </Nav>
          </>)}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}