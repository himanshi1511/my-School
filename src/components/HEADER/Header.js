import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo2 from "../../assets/logo.svg";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import Tutorials from "../Tutorials/Tutorials";
import Exercise from "../Exercise/Exercise";
import Getcertificate from "../GetCertifies/Getcertificate";
import Services from "../Services/Services";
import { FaToggleOn } from "react-icons/fa";
// import Header2 from "../Header2/Header2";

const Header = () => {
  // State to manage the active NavDropdown item
  const [activeItem, setActiveItem] = useState(null);
  const [showTutorialCard, setShowTutorialCard] = useState(false);
  const [showExerciseCard, setShowExerciseCard] = useState(false);
  const [showCertifiedCard, setShowCertifiedCard] = useState(false);
  const [showServiceCard, setShowServiceCard] = useState(false);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  
  const handleSearch = () => {
    navigate(`/${searchQuery}`);
  };
  // State for theme (dark or light)
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Function to handle item selection
  const handleSelect = (eventKey) => {
    setActiveItem(eventKey);

    setShowTutorialCard(false);
    setShowExerciseCard(false);
    setShowServiceCard(false);
    setShowCertifiedCard(false);
  };

  const toggleTutorialCard = () => {
    setActiveItem("tutorial");
    setShowTutorialCard(!showTutorialCard);
    setShowExerciseCard(false);
    setShowServiceCard(false);
    setShowCertifiedCard(false);
  };

  const toggleExerciseCard = () => {
    setActiveItem("exercise");
    setShowExerciseCard(!showExerciseCard);
    setShowTutorialCard(false);
    setShowServiceCard(false);
    setShowCertifiedCard(false);
  };
  const toggleCertifiedCard = () => {
    setActiveItem("certified");
    setShowCertifiedCard(!showCertifiedCard);
    setShowTutorialCard(false);
    setShowExerciseCard(false);
    setShowServiceCard(false);
  };
  const toggleServiceCard = () => {
    setActiveItem("services");
    setShowServiceCard(!showServiceCard);
    setShowTutorialCard(false);
    setShowExerciseCard(false);
    setShowCertifiedCard(false);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Define the theme class based on the state
  const themeClass = isDarkTheme ? "dark" : "light";
  const textcolor = isDarkTheme ? "white" : "black";

  return (
    <header className={`header`}>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        style={{ position: "fixed", width: "100%" }}
        data-bs-theme={textcolor}
        bg={themeClass}
      >
        <Container fluid>
          {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
          <div className="logo">
            <img className="logo-img" src={logo2} alt="logo"></img>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown
                title="Tutorial"
                id="navbarScrollingDropdown"
                active={activeItem === "tutorial" && showTutorialCard}
                onSelect={() => handleSelect("tutorial")}
                onClick={toggleTutorialCard}
                
              ></NavDropdown>

              <NavDropdown
                title="Exercises"
                id="navbarScrollingDropdown"
                active={activeItem === "exercise" && showExerciseCard}
                onSelect={() => handleSelect("exercise")}
                onClick={toggleExerciseCard}
              ></NavDropdown>

              <NavDropdown
                title="Get Certified"
                id="navbarScrollingDropdown"
                active={activeItem === "certified" && showCertifiedCard}
                onSelect={() => handleSelect("certified")}
                onClick={toggleCertifiedCard}
              ></NavDropdown>

              <NavDropdown
                title="Services"
                id="navbarScrollingDropdown"
                active={activeItem === "services" && showServiceCard}
                onSelect={() => handleSelect("services")}
                onClick={toggleServiceCard}
              ></NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ marginTop: "2px" }}
                onChange={(e) => {setSearchQuery(e.target.value)}}
              />
              <Button
                variant="outline-success"
                className="search"
                style={{
                  backgroundColor: "#04AA6D",
                  color: "white",
                  height: "40px",
                  marginTop: "2px",
                }}
                onClick={handleSearch}
              >
                Search
              </Button>
            </Form>

        
            <div class="button-container">
            <button class="signup" onClick={()=>{navigate("/sign-page")}}>Sign Up</button>
            <button class="login" onClick={()=>{navigate("/login-page")}}>Log In</button>
          </div>
          </Navbar.Collapse>
          {/* <div class="button-container">
            <button class="signup" onClick={()=>{navigate("/signup-page")}}>Sign Up</button>
            <button class="login" onClick={()=>{navigate("/login-page")}}>Log In</button>
          </div> */}
        </Container>
      </Navbar>

      {/* Add a container for the card below the fixed header */}
      <div className="card-container" style={{ marginTop: "5rem" }}>
        {showTutorialCard && <Tutorials onClose={toggleTutorialCard} />}
        {showExerciseCard && <Exercise onClose={toggleExerciseCard} />}
        {showCertifiedCard && <Getcertificate onClose={toggleCertifiedCard} />}
        {showServiceCard && <Services onClose={toggleServiceCard} />}
      </div>
    </header>
  );
};

export default Header;
