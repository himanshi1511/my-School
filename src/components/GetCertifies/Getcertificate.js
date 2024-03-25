import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineClose } from "react-icons/ai";
import "../Card.css";

const Getcertificate = ({ onClose }) => {
  const [searchText, setSearchText] = useState("");
  const handleClose = () => {
    onClose();
  };

  const allLinks = [
    { text: "HTML", category: "HTML and CSS" },
    { text: "CSS", category: "HTML and CSS" },
    { text: "Bootstrap", category: "HTML and CSS" },
    { text: "Data Analytics", category: "Data Analytics" },
    { text: "NumPy", category: "Data Analytics" },
    { text: "Pandas", category: "Data Analytics" },
    { text: "Excel", category: "Data Analytics" },
    { text: "Social Media", category: "Data Analytics" },
    { text: "Javascript", category: "JavaScript" },
    { text: "React", category: "JavaScript" },
    { text: "jQuery", category: "JavaScript" },
    { text: "Frontend", category: "Programs" },
    { text: "Web Dev.", category: "Programs" },
    { text: "Web App", category: "Programs" },
    { text: "Web Design", category: "Programs" },
    { text: "Python", category: "Backend" },
    { text: "SQL", category: "Backend" },
    { text: "MySQL", category: "Backend" },
    { text: "PHP", category: "Backend" },
    { text: "Java", category: "Backend" },
    { text: "C", category: "Backend" },
    { text: "C#", category: "Backend" },
    { text: "R", category: "Backend" },
    { text: "Django", category: "Backend" },
    { text: "TypeScript", category: "Backend" },
    { text: "XML", category: "Backend" },
    { text: "Cyber Security", category: "Backend" },
    { text: "Accessibility", category: "Backend" },
  ];

  const filterCertificate = (text) => {
    const lowerCaseSearchText = text.toLowerCase();
    return allLinks.filter((link) =>
      link.text.toLowerCase().includes(lowerCaseSearchText)
    );
  };

  const filteredCertificates = filterCertificate(searchText);
  const groupLinksByCategory = () => {
    const categories = {};
    filteredCertificates.forEach((link) => {
      if (!categories[link.category]) {
        categories[link.category] = [];
      }
      categories[link.category].push(link);
    });
    return categories;
  };

  const categories = groupLinksByCategory();

  return (
    <Card
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#282a35",
        marginTop: "3rem",
        paddingBottom: "3rem",
        marginBottom :"20rem"
      }}
    >
      <Card.Body style={{ overflow: "auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "2rem",
          }}
        >
          <h2 style={{ color: "white" }}>Get Certtified</h2>
          <div className="search-container">
            <input
              type="text"
              placeholder="Filter...."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="search-button"
              onClick={() => setSearchText(searchText)}
            >
              Search
            </button>
          </div>
          <AiOutlineClose onClick={handleClose} style={{ color: "white" }} />
        </div>
        <div className="content-div">
          {Object.keys(categories).map((category, index) => (
            <React.Fragment key={index}>
              <h3 style={{ color: "#FFF4A3", alignContent: "center" }}>
                {category}
              </h3>
              {categories[category].map((link, linkIndex) => (
                <div className="col1" key={linkIndex}>
                  <div className="htmlcss">
                    <a
                      href="/"
                      className="learning"
                      style={{ color: "#ddd", fontWeight: "600" }}
                    >
                      {link.text}
                    </a>
                    <a href="/" style={{ marginLeft: "5px", color: "#FFF4A3" }}>
                      Certificate
                    </a>
                    <a href="/" style={{ marginLeft: "5px", color: "#FFF4A3" }}>
                      Course
                    </a>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Getcertificate;
