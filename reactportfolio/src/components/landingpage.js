import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="/images/damiantapp.jpg"
              alt="profile picture"
              style={{ height: "350px" }}
            />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />

              <p>
                HTML/CSS | Bootstrap | JavaScript | JQuery | MySQL | React |
                MongoDB | Node.JS | Express
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://au.linkedin.com/in/damiantapp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://github.com/damian545"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
