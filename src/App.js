import React from "react";
import Header from "./components/HEADER/Header";
import Footer from "./components/FOOTER/Footer";
import Main from "./Pages/MAIN/Main";
import Header2 from "./components/Header2/Header2";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";
import Htmlpage from "./Pages/HTML/Htmlpage";
import Javascriptpage from "./Pages/JAVASCRIPT/JavascriptPage";
import HTMLIntro from "./Pages/HTML/HTMLIntro";
import CSS from "./Pages/CSS/CSS";
import LogIn from "./Pages/Login/Login";
import HtmlEditors from "./Pages/HTML/HtmlEditors";
import reactp from "./Pages/Reactt/Reactpage"
import Excel from "./Pages/Excel/Excel";
const App = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/login-page" && pathname !=="/sign-page"  && (
        <>
          <Header />
          <Header2 />
        </>
      )}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/javascript" element={<Javascriptpage />} />
        <Route path="/login-page" element={<LogIn />} />
        <Route path="/sign-page" element={<SignUp />} />
        <Route path="/html" element={<Htmlpage />} />
        <Route path="/htmlintro" element={<HTMLIntro />} />
        <Route path="/htmleditors" element={<HtmlEditors />} />
        <Route path="/css" element={<CSS />} />
        <Route path="/react" element={<reactp />} />
        <Route path="/excel" element={<Excel />} />
      </Routes>
      {pathname !== "/login-page" && pathname !=="/sign-page" && (
        <>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
