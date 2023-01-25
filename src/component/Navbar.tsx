import {useState} from "react";
import { Navbar, Nav, Container, Offcanvas} from "react-bootstrap";
import ProjectName from "../var/ProjectName";
import "../style/Navbar.css";

const _Nav = () => {

	let [authMode, setAuthMode] = useState("logout")

	const changeAuthMode = () => {
		setAuthMode(authMode === "logout" ? "login" : "logout")
	}

	if (authMode === "login") {
	return (
		<>
			<Nav.Link href="#leaderboard">Learderboard</Nav.Link>
            <Nav.Link href="#game">Play</Nav.Link>
            <Nav.Link href="about">About Us</Nav.Link>
				<br /><br />
			<Nav.Link href="#profil">
            	Profil
				<img
            	  alt=""
            	  src="../public/img/logo192.png
				  "
            	  width="30"
            	  height="30"
            	  className="d-inline-block align-top"
            	/>{' '}
			</Nav.Link>
			<Nav.Link href="#action5" onClick={changeAuthMode}>Log Out</Nav.Link>
		</>
		)
	}
	else {
	return (
		<>
			<Nav.Link href="about">About Us</Nav.Link>
			<br /><br />
			<Nav.Link href="#auth" onClick={changeAuthMode}>Sign In</Nav.Link>
			<Nav.Link href="auth">Sign Up</Nav.Link>
		</>
		)
	}
}

const _Navbar = () => {

	return (
    <>
      {["false"].map((expand) => (
        <Navbar key={expand} bg="dark" variant="dark" expand={expand} className="mb-0">
          <Container fluid>
            <Navbar.Brand href="/#"><ProjectName /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <_Nav />
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default _Navbar 