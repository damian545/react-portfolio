import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                alt="avitar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Damian Tapp</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50px" }} />
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>0402 123 456</p>
            <h5>Email</h5>
            <p>someone@email.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50px" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={1988}
              endYear={1992}
              schoolName="Christies Beach High School"
              schoolDiscription="Lorem Ipsum is simply dummy text of the printing and typesetting
             industry."
            />

            <Education
              startYear={2019}
              endYear={2020}
              schoolName="Adelaide University"
              schoolDiscription="Lorem Ipsum is simply dummy text of the printing and typesetting
             industry."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear={1993}
              endYear={2020}
              jobName="Factory Worker at Monroe Australia"
              jobDiscription="Forklift operator, Crane operator and Tubemill operator"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Language Skills</h2>
            <Skills skill="Javascript" progress={60} />
            <h2></h2>
            <Skills skill="HTML/CSS" progress={100} />
            <h2></h2>
            <Skills skill="Node.JS" progress={30} />
            <h2></h2>
            <Skills skill="MongoDB" progress={30} />
            <h2></h2>
            <Skills skill="React.JS" progress={65} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
