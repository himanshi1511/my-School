import React from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./CommonHTML.css";
const HTMLIntro = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="page">
        <section className="sidebar">
          <div className="sidebarcontent">
            <div>
              <h4>HTML Tutorial</h4>
            </div>
            <div>
              <p
                onClick={() => {
                  navigate("/html");
                }}
              >
                HTML HOME
              </p>
            </div>
            <div>
              <p
                onClick={() => {
                  navigate("/htmlintro");
                }}
                style={{ backgroundColor: "04AA6D" }}
              >
                HTML Introduction
              </p>
            </div>
            <div>
              <p
                onClick={() => {
                  navigate("/htmleditors");
                }}
              >
                HTML Editors
              </p>
            </div>
            <div>
              <p>HTML Basic</p>
            </div>
            <div>
              <p>HTML Elements</p>
            </div>
            <div>
              <p>HTML Attributes</p>
            </div>
            <div>
              <p>HTML Headings</p>
            </div>
            <div>
              <p>HTML Paragraphs</p>
            </div>
            <div>
              <p>HTML Styles</p>
            </div>
            <div>
              <p>HTML Formatting</p>
            </div>
            <div>
              <p>HTML Comments</p>
            </div>
            <div>
              <p>HTML CSS</p>
            </div>
            <div>
              <p>HTML Links</p>
            </div>
            <div>
              <p>HTML Images</p>
            </div>
            <div>
              <p>HTML Tables</p>
            </div>
            <div>
              <p>HTML Lists</p>
            </div>
            <div>
              <p>HTML Classes</p>
            </div>
            <div>
              <p>HTML Id</p>
            </div>
            <div>
              <h4>HTML Forms</h4>
            </div>
            <div>
              <p>HTML Forms</p>
            </div>
            <div>
              <p>HTML Form Attributes</p>
            </div>
            <div>
              <p>HTML Form Elements</p>
            </div>
            <div>
              <p>HTML Input Attributes</p>
            </div>
          </div>
        </section>
        <section className="mainpage">
          <div className="contentcss">
            <div style={{ marginBottom: "10px", paddingLeft: "1.5rem" }}>
              <h1>HTML Introduction</h1>
            </div>
            <div className="sectionbutton">
              <button>
                <FaAngleLeft />
                Home
              </button>
              <button>
                Next
                <FaAngleRight />
              </button>
            </div>
            <hr />
            <div style={{ paddingLeft: "1.5rem" }}>
              <p>
                HTML is the standard markup language for creating Web pages.
              </p>
            </div>
            <div style={{ paddingLeft: "1.5rem" }}>
              <p style={{ fontSize: "30px" }}>What is HTML?</p>
              <ul className="listitems">
                <li>HTML stands for Hyper Text Markup Language</li>
                <li>
                  HTML is the standard markup language for creating Web pages
                </li>
                <li>HTML describes the structure of a Web page</li>
                <li>HTML consists of a series of elements</li>
                <li>
                  HTML elements tell the browser how to display the content
                </li>
                <li>
                  HTML elements label pieces of content such as "this is a
                  heading", "this is a paragraph", "this is a link", etc.
                </li>
              </ul>
            </div>
            <hr />

            <div style={{ paddingLeft: "1.5rem" }}>
              <div>
                <h5>A Simple HTMl Document</h5>
              </div>

              <div
                style={{
                  backgroundColor: "rgb(231, 233, 235)",
                  height: "25rem",
                }}
              >
                <p>Example</p>
                <div className="examples">
                  <span style={{ color: "#2d289e" }}>{"<"}</span>
                  <span style={{ color: "brown" }}> !DOCTYPE</span>
                  <span style={{ color: "red" }}> html</span>
                  <span style={{ color: "#2d289e" }}>{">"}</span>
                  <br />
                  <span style={{ color: "#2d289e" }}>{"<"}</span>
                  <span style={{ color: "brown" }}>html</span>
                  <span style={{ color: "#2d289e" }}>{">"}</span>
                  <br />
                  <span style={{ color: "#2d289e" }}>{"<"}</span>
                  <span style={{ color: "brown" }}>head</span>
                  <span style={{ color: "#2d289e" }}>{">"}</span>
                  <br />
                  <span style={{ color: "#2d289e" }}>{"<"}</span>
                  <span style={{ color: "brown" }}>title</span>
                  <span style={{ color: "#2d289e" }}>{">"}</span>
                  <span>HTML Tutorial </span>
                  <span style={{ color: "#2d289e" }}>{"</"}</span>
                  <span style={{ color: "brown" }}>title</span>
                  <span style={{ color: "#2d289e" }}>{">"}</span>
                  <br />
                  <span style={{ color: "#2d289e" }}>{"</"}</span>
                  <span style={{ color: "brown" }}>head</span>
                  <span style={{ color: "#2d289e" }}>{">"}</span>
                  <br />
                  <span style={{ color: "#2d289e" }}>{"<"}</span>
                  <span style={{ color: "brown" }}>body</span>
                  <span style={{ color: "#2d289e" }}>{">"}</span>
                  <br /> <br />
                  <span style={{ color: "#2d289e" }}>{"<"}</span>
                  <span style={{ color: "brown" }}>h1</span>
                  <span style={{ color: "#2d289e" }}>{">"}</span>
                  <span>This is a heading</span>
                  <span style={{ color: "#2d289e" }}>{"</"}</span>
                  <span style={{ color: "brown" }}>h1</span>
                  <span style={{ color: "#2d289e" }}>{">"}</span>
                  <br />
                  <span style={{ color: "#2d289e" }}>{"<"}</span>
                  <span style={{ color: "brown" }}>p</span>
                  <span style={{ color: "#2d289e" }}>{">"}</span>
                  <span>This is a paragraph.</span>
                  <span style={{ color: "#2d289e" }}>{"</"}</span>
                  <span style={{ color: "brown" }}>p</span>
                  <span style={{ color: "#2d289e" }}>{">"}</span>
                  <br />
                  <br />
                  <span style={{ color: "#2d289e" }}>{"</"}</span>
                  <span style={{ color: "brown" }}>body</span>
                  <span style={{ color: "#2d289e" }}>{">"}</span>
                  <br />
                  <span style={{ color: "#2d289e" }}>{"</"}</span>
                  <span style={{ color: "brown" }}>html</span>
                  <span style={{ color: "#2d289e" }}>{">"}</span>
                </div>
                <div style={{ marginLeft: "1rem" }}>
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_intro"
                    target="_blank"
                  >
                    <button className="tryyourselfbtn">Try it Yourself</button>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="sectionbutton"
              style={{
                paddingLeft: "1.5rem",
                paddingBottom: "2rem",
                paddingTop: "2rem",
              }}
            >
              <button>
                <FaAngleLeft />
                Home
              </button>
              <button>
                Next
                <FaAngleRight />
              </button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default HTMLIntro;
