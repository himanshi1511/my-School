import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineClose } from "react-icons/ai";
import "../Card.css";

const Tutorials = ({ onClose }) => {
  const [searchText, setSearchText] = useState("");
  const handleClose = () => {
    onClose();
  };
  

  const allLinks = [
    // Your links data
    { text: "Learn HTML", category: "HTML and CSS" },
    { text: "Learn CSS", category: "HTML and CSS" },
    { text: "Learn RWD", category: "HTML and CSS" },
    { text: "Learn Bootstrap", category: "HTML and CSS" },
    { text: "Learn W3.CSS", category: "HTML and CSS" },
    { text: "Learn Icons", category: "HTML and CSS" },
    { text: "Learn SVG", category: "HTML and CSS" },
    { text: "Learn Canva", category: "HTML and CSS" },
    { text: "Learn Graphics", category: "HTML and CSS" },
    { text: "Learn Character", category: "HTML and CSS" },
    { text: "Learn How To", category: "HTML and CSS" },
    { text: "Learn Javascrpipt", category: "JavaScript" },
    { text: "Learn React", category: "JavaScript" },
    { text: "Learn jQuery", category: "JavaScript" },
    { text: "Learn Angular", category: "JavaScript" },
    { text: "Learn JSON", category: "JavaScript" },
    { text: "Learn AI", category: "Data Analytics" },
    { text: "Learn GenerativeAI", category: "Data Analytics" },
    { text: "Learn ChatGpt-3.5", category: "Data Analytics" },
    { text: "Learn ChatGpt-4", category: "Data Analytics" },
    { text: "Learn Google Bard", category: "Data Analytics" },
    { text: "Learn Machine Learning", category: "Data Analytics" },
    { text: "Learn Data Science", category: "Data Analytics" },
    { text: "Learn Ni,Py", category: "Data Analytics" },
    { text: "Learn Panda", category: "Data Analytics" },
    { text: "Learn SciPy", category: "Data Analytics" },
    { text: "Learn Statistics", category: "Data Analytics" },
    { text: "Learn Excel", category: "Data Analytics" },
    { text: "Learn Google Sheets", category: "Data Analytics" },
  ];

  // Function to filter categories based on the search text
  const filterTutorials = (text) => {
    const lowerCaseSearchText = text.toLowerCase();
    return allLinks.filter((link) =>
      link.text.toLowerCase().includes(lowerCaseSearchText)
    );
  };

  const filteredTutorials = filterTutorials(searchText);

  // Function to group links by category
    const groupLinksByCategory = () => {
      const categories = {};
      filteredTutorials.forEach((link) => {
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
        marginBottom :"20rem",
        // zIndex: "10000"
      }}
    >
      <Card.Body style={{ overflow: "auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "2rem",
            marginTop :"3rem"
          }}
        >
          <h2 style={{ color: "white" }}>Tutorials</h2>
          <div className="search-container">
            <input
              type="text"
              placeholder="Filter..."
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
              <h3 style={{ color :"#FFF4A3" , alignContent : "center" }}>{category}</h3>
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
                    <a href="/" style={{marginLeft :"5px" , color :"#FFF4A3"}}>Tutorial</a>
                    <a href="/" style={{marginLeft :"5px" , color :"#FFF4A3"}}>Reference</a>
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

export default Tutorials;
