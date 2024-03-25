
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { AiOutlineDoubleRight } from "react-icons/ai";

const Excel = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="page">
        <section className="sidebar">
          <div className="sidebarcontent">
            <div>
              <h4>Excel Tutorial</h4>
            </div>
            <div>
              <p
                onClick={() => {
                  navigate("/html");
                }}
              >
                Excel HOME
              </p>
            </div>
            <div>
              <p
                onClick={() => {
                  navigate("/htmlintro");
                }}
              >
                Excel Introduction
              </p>
            </div>
            <div>
              <p
                onClick={() => {
                  navigate("/htmleditors");
                }}
              >
                Excel Get Started
              </p>
            </div>
            <div>
              <p>Excel Overview</p>
            </div>
            <div>
              <p>Excel Syntax</p>
            </div>
            <div>
              <p>HTML Attributes</p>
            </div>
            <div>
              <p>Excel Ranges</p>
            </div>
            <div>
              <p>Excel Fill</p>
            </div>
            <div>
              <p>Excel Add cell</p>
            </div>
            <div>
              <p>Excel Remove Cell</p>
            </div>
            <div>
              <p>Excel Delete Cell</p>
            </div>
            <div>
              <p>Excel Undo</p>
            </div>
            <div>
              <p>Excel Redo</p>
            </div>
            <div>
              <p>Excel Formulas</p>
            </div>
            <div>
              <p>Excel Functions</p>
            </div>
            <div>
              <p>Excel Paranthesis</p>
            </div>
          </div>
        </section>
        <section className="mainpage">
          <div className="contentcss">
            <div style={{ marginBottom: "10px", paddingLeft: "1.5rem" }}>
              <h1>Excel Tutorial</h1>
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
                <p>Excel is the world's most used spreadsheet program</p>
              </div>
              <div>
                <p>Excel is a powerful tool to use for mathematical functions</p>
              </div>
          
              <div>
                <button>
                  Start learning Excel now{" "}
                  <AiOutlineDoubleRight style={{ fontSize: "1.5rem" }} />
                </button>
              </div>
            </div>
            <div>
              <hr />
            </div>
            <div style={{ paddingLeft: "1.5rem" }}>
              <h1>Exel Examples</h1>
            </div>
            <div style={{ paddingLeft: "1.5rem" }}>
              <p>
              We use practical examples to give the user a better understanding of the concepts.
              </p>
            </div>
            <div style={{ paddingLeft: "1.5rem" }}>
                <h3>Copy Value Tools</h3>
              <p>
              Example values can be copied from the tutorial and into your spreadsheet, making it easy for you to tag along step-by-step:
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

export default Excel;


