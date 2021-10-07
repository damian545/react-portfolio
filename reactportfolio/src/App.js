import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Header
        className="header-color"
        title={
          <Link style={{ textDecoration: "none", fontSize: "30px", fontFamily: "Anton", color: "teal" }} to="/">
            MY PORTFOLIO
          </Link>
        }
      >
        <Navigation>
          <Link style={{ textDecoration: "none", fontSize: "30px", fontFamily: "Anton", color: "teal" }} to="/resume">Resume</Link>
          <Link style={{ textDecoration: "none", fontSize: "30px", fontFamily: "Anton", color: "teal" }} to="/aboutme">AboutMe</Link>
          <Link style={{ textDecoration: "none", fontSize: "30px", fontFamily: "Anton", color: "teal" }} to="/projects">Projects</Link>
          <Link style={{ textDecoration: "none", fontSize: "30px", fontFamily: "Anton", color: "teal" }} to="/contact">Contact</Link>
        </Navigation>
      </Header>
      <Drawer
        title={
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            My Portfolio
          </Link>
        }
      >
        <Navigation>
          <Link to="/resume">Resume</Link>
          <Link to="/aboutme">AboutMe</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </Navigation>
      </Drawer>
      <Content>
        <div className="page-content" />
        <Main />
      </Content>
    </Layout>
  );
}

export default App;
