import React from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { AiOutlineDoubleRight } from "react-icons/ai";
import "./CommonHTML.css";
const HtmlEditors = () => {
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
                  navigate("/html-page");
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
              <h1>HTML Editors</h1>
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
              <p>A simple text editor is all you need to learn HTML.</p>
            </div>
            <div style={{ paddingLeft: "1.5rem" }}>
              <p style={{ fontSize: "30px" }}>
                Learn HTML Using Notepad or TextEdit
              </p>
              <ul className="listitems">
                <li>
                  Web pages can be created and modified by using professional
                  HTML editors.
                </li>
                <li>
                  However, for learning HTML we recommend a simple text editor
                  like Notepad (PC) or TextEdit (Mac).
                </li>
                <li>
                  We believe that using a simple text editor is a good way to
                  learn HTML.
                </li>
                <li>
                  Follow the steps below to create your first web page with
                  Notepad or TextEdit.
                </li>
              </ul>
              <h3>Step 1: Open Notepad (PC)</h3>
              <ul>
                <li>
                  Windows 8 or later: Open the Start Screen (the window symbol
                  at
                </li>
                <br />
                <li>
                  the bottom left on your screen). Type Notepad. Windows 7 or
                </li>
                <br />
                <li>earlier: Open Start - Programs - Accessories - Notepad</li>
                <br />
              </ul>
              <h3>Step 2: Write Some HTML</h3>
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
              <h3>Step 3: Save the HTML Page</h3>
              <p>
                Save the file on your computer. Select File - Save as in the
                Notepad menu.
              </p>

              <p>
                {" "}
                the file "index.html" and set the encoding to UTF-8 (which is
                the preferred encoding for HTML files).
              </p>

              <h3>Step 4: View the HTML Page in Your Browser</h3>
              <p>
                Open the saved HTML file in your favorite browser (double click
                on the file, or right-click - and choose "Open with").
              </p>
            </div>
            <hr />
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

export default HtmlEditors;
