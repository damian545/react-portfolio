import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardText,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "url() center / cover",
              }}
            ></CardTitle>
            <CardText>
              This is a fitness tracker app, that tracks your exercise types and
              progress to getting fit. It has a graph, showing your results of
              what exercises you have done.
            </CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://damian545.github.io/fitnesstracker/"
              >
                Github
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "url() center / cover",
              }}
            ></CardTitle>
            <CardText>
              This is my Updated Portfolio Page number 2, show off my extra
              skills that I have learnt during bootcamp coding. Creativity is
              the key here as well as using all the new languages.
            </CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://damian545.github.io/updatedportfoliopage2/"
              >
                Github
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "url() center / cover",
              }}
            ></CardTitle>
            <CardText>
              This is a random password generator, this alows the user to
              generate up to 20 character password.
            </CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://damian545.github.io/homework3/"
              >
                Github
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "url() center / cover",
              }}
            ></CardTitle>
            <CardText>
              This is a Day Planner, 9am to 5pm work day, past, present and
              future color indicator triggered by the date and time. The user
              can add and delete things to do.
            </CardText>
            <CardActions border>
              <Button
                colored
                a
                target="_blank"
                href="https://damian545.github.io/dayPlanner/"
              >
                Github
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Fitness Tracker</Tab>
          <Tab>Updated Portfolio Page2</Tab>
          <Tab>Password Generator</Tab>
          <Tab>Day Planner</Tab>
        </Tabs>

        <Grid className="projects-grid">
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
