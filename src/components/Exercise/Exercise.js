import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineClose } from "react-icons/ai";
import "../Card.css";

const Exercise = ({ onClose }) => {
  const [searchText, setSearchText] = useState("");
  const handleClose = () => {
    onClose();
  };
  const allLinks = [
    {text: "HTML" , category: "HTML and CSS"},
    {text: "CSS" , category: "HTML and CSS"},
    {text: "Bootstrap" , category: "HTML and CSS"},
    {text: "NumPy" , category: "Data Analytics"},
    {text: "Pandas" , category: "Data Analytics"},
    {text: "SciPy" , category: "Data Analytics"},
    {text: "Excel" , category: "Data Analytics"},
    {text: "Javascript" , category: "JavaScript"},
    {text: "React" , category: "JavaScript"},
    {text: "jQuery" , category: "JavaScript"},
    {text: "Vue" , category: "JavaScript"},
    {text: "Python" , category: "Backend"},
    {text: "SQL" , category: "Backend"},
    {text: "MySQL" , category: "Backend"},
    {text: "PHP" , category: "Backend"},
    {text: "Java" , category: "Backend"},
    {text: "C" , category: "Backend"},
    {text: "C++" , category: "Backend"},
    {text: "C#" , category: "Backend"},
    {text: "R" , category: "Backend"},
    {text: "Kotlin" , category: "Backend"},
    {text: "Django" , category: "Backend"},
    {text: "PostgreSQL" , category: "Backend"},
    {text: "TypeScript" , category: "Backend"},
    {text: "AWS Cloud" , category: "Backend"},
    {text: "Git" , category: "Backend"},
    
  ];


  const filterExercises = (text)=> {
    const lowerCaseSearchText = text.toLowerCase();
    return allLinks.filter((links) =>
      links.text.toLowerCase().includes(lowerCaseSearchText)
    );
  };

  const filteredExerecises = filterExercises(searchText);

  const groupLinksByCategory = () => {
    const categories = {};
    filteredExerecises.forEach((link) => {
      if(!categories[link.category]) {
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
          <h2 style={{ color: "white" }}>Exercises</h2>
          <div className="search-container">
            <input
              type="text"
              placeholder="Filter..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="search-button"
            onClick={() => setSearchText(searchText)}>
              Search
            </button>
          </div>
          <AiOutlineClose onClick={handleClose} style={{ color: "white" }} />
        </div>
        <div className="content-div">
          {Object.keys(categories).map((category , index) => (
            <React.Fragment key = {index}>
              <h3 style={{color : "#FFF4A3" , alignContent : "center"}}>{category}</h3>
              {categories[category].map((link,linkIndex) => (
                <div className="col1" key= {linkIndex}>
                  <div className="htmlcss">
                    <a href="/" className="learning" style={{color : "#ddd" , fontWeight :"600"}}>
                      {link.text}
                    </a>
                    <a href="/" style={{marginLeft :"5px" , color : "#FFF4A3"}}>Exercise</a>
                    <a href="/" style={{marginLeft :"5px" , color : "#FFF4A3"}}>Reference</a>
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

export default Exercise;
