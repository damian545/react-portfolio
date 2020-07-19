import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell className="aboutme" col={12}>
            <p style={{ width: "100%", margin: "auto", paddingTop: "1em" }}>
              Hello, my name is Damian Tapp. I'm 46 years old and I'm studying
              to be a web designer at Adelaide University at the moment. I have
              completed a lot of things for the first time during this course,
              many of which I am very proud of. Seeing as I have only started to
              use code for the first time at the end of 2019 leading up to this
              course. I am a very hard working person and I love finding out how
              things work, whether it is during Uni or with the hobbies that I
              do. I really want to change my job into a career. I have been
              working hard to learn what it takes to be a web designer, so I can
              fulfill my dream of change. I believe that my current job will
              fade away and getting into technology based work is here to stay,
              I want be a part of it. After spending 27 years in one job with
              little to no achievements, has effected me some what. I would love
              to be in an industry that has achievements and something to be
              proud of at the end of the day. About 6 years ago, when I was
              heavily into skateboarding. I did a lot of filming and film
              editing, I love to create. This is why I have so many hobbies and
              why I should be a programmer.
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
