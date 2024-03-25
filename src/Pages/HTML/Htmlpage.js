import React from "react";
import "./Htmlpage.css";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { AiOutlineDoubleRight } from "react-icons/ai";

const Htmlpage = () => {
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
              <h1>HTML Tutorial</h1>
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
            <div className="section3content">
              <div>
                <p>HTML is the standard markup language for Web pages.</p>
              </div>
              <div>
                <p>With HTML you can create your own Website.</p>
              </div>
              <div>
                <p>HTML is easy to learn - You will enjoy it!</p>
              </div>
              <div>
                <button>
                  Start learning HTML now{" "}
                  <AiOutlineDoubleRight style={{ fontSize: "1.5rem" }} />
                </button>
              </div>
            </div>
            <div>
              <hr />
            </div>
            <div style={{ paddingLeft: "1.5rem" }}>
              <h1>HTML Examples</h1>
            </div>
            <div style={{ paddingLeft: "1.5rem" }}>
              <p>
                In this HTML tutorial, you will find more than 200 examples.
                With our online "Try it Yourself" editor, you can edit and test
                each example yourself!
              </p>
            </div>
            <div style={{ paddingLeft: "1.5rem" }}>
              <p>
                With our online editor, you can edit the CSS, and click on a
                button to view the result.
              </p>
            </div>
            <div
              className="box"
              style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
            ></div>

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

export default Htmlpage;
