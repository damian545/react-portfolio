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
                background:
                  "url(https://attachment.outlook.live.net/owa/MSA%3ADAM180%40hotmail.com/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATZiZmYAZC05ZmFiLWI1ZjMtMDACLTAwCgBGAAADxeHU0ki%2BMEqWo4RJgW6WYgcA2emy4VqqikCQtSnD4NJvcgAAAgEMAAAA2emy4VqqikCQtSnD4NJvcgAD604oswAAAAESABAAcTmcpdpTjE2kD73M3mWcyg%3D%3D&thumbnailType=2&owa=outlook.live.com&scriptVer=2020062804.02&isc=1&X-OWA-CANARY=wntMEjOtQkmUXao-iftio1DRO4p7J9gYPBBy5CyQAMPCarnfhljIIIt4y6Ki2eyXmmg8zMoXCuk.&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjU2MzU4ODUyMzRCOTI1MkRERTAwNTc2NkQ5RDlGMjc2NTY1RjYzRTIiLCJ4NXQiOiJWaldJVWpTNUpTM2VBRmRtMmRueWRsWmZZLUkiLCJ0eXAiOiJKV1QifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2subGl2ZS5jb20iLCJ1YyI6ImFmZDIwODA4MGJlZjRmN2Q4NDc5NmJlZDllNWRiYTU5IiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInByaW1hcnlzaWRcIjpcIlMtMS0yODI3LTQ0MjM2NS0yNjc4ODMwNTc5XCIsXCJwdWlkXCI6XCIxODk5OTQ1ODg2NzI1NjE5XCIsXCJvaWRcIjpcIjAwMDZiZmZkLTlmYWItYjVmMy0wMDAwLTAwMDAwMDAwMDAwMFwiLFwic2NvcGVcIjpcIk93YURvd25sb2FkXCJ9IiwibmJmIjoxNTk0Njc5MDM3LCJleHAiOjE1OTQ2Nzk2MzcsImlzcyI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJhdWQiOiIwMDAwMDAwMi0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYXR0YWNobWVudC5vdXRsb29rLmxpdmUubmV0QDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImhhcHAiOiJvd2EifQ.qHgCw9QB0qKrd4jGH5WIiKOqmlChgCdrz64rXN1mU1NctgpOLvvUE73dYWv-VqsEnxe7kjHK469XYS5n1PI1zLBhrHTe04o6khD2Nk_K9QY-Bak1KMjwNHLpvkJWHkD_DyllCY1ZORwpYVmdrbPNMYTc1DWpkQdNReeLg41ZDf_vgoy_pcL1-cn76fGWo1C1FVDY12IucgsCAF9-h2JmZ2yiYmiR87affjmI16hjQ54JQYuZmXQk1l8lAkiaNR9xFLYnnZbxXNxmFtq00VaK5c5FXHHwnir1gJSVdzgTvaTKsrTaGU7BTQ7eEt3QLOVU0QwYRkdHVP-HXIhWghnmew&animation=true) center / cover",
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
                background:
                  "url(https://attachment.outlook.live.net/owa/MSA%3ADAM180%40hotmail.com/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATZiZmYAZC05ZmFiLWI1ZjMtMDACLTAwCgBGAAADxeHU0ki%2BMEqWo4RJgW6WYgcA2emy4VqqikCQtSnD4NJvcgAAAgEMAAAA2emy4VqqikCQtSnD4NJvcgAD6cJRmQAAAAESABAAdmolwj%2B7EUib9zaU4LndRg%3D%3D&thumbnailType=2&owa=outlook.live.com&scriptVer=2020062804.02&isc=1&X-OWA-CANARY=vpnm9HFZBUKCY2kBU8RCB1DkK7l7J9gYtGwkBRhkjzoJ9y12Ov8M4xYGqEGvQ_vzTWvIbjz1MP4.&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjU2MzU4ODUyMzRCOTI1MkRERTAwNTc2NkQ5RDlGMjc2NTY1RjYzRTIiLCJ4NXQiOiJWaldJVWpTNUpTM2VBRmRtMmRueWRsWmZZLUkiLCJ0eXAiOiJKV1QifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2subGl2ZS5jb20iLCJ1YyI6ImFmZDIwODA4MGJlZjRmN2Q4NDc5NmJlZDllNWRiYTU5IiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInByaW1hcnlzaWRcIjpcIlMtMS0yODI3LTQ0MjM2NS0yNjc4ODMwNTc5XCIsXCJwdWlkXCI6XCIxODk5OTQ1ODg2NzI1NjE5XCIsXCJvaWRcIjpcIjAwMDZiZmZkLTlmYWItYjVmMy0wMDAwLTAwMDAwMDAwMDAwMFwiLFwic2NvcGVcIjpcIk93YURvd25sb2FkXCJ9IiwibmJmIjoxNTk0Njc5MDM3LCJleHAiOjE1OTQ2Nzk2MzcsImlzcyI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJhdWQiOiIwMDAwMDAwMi0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYXR0YWNobWVudC5vdXRsb29rLmxpdmUubmV0QDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImhhcHAiOiJvd2EifQ.qHgCw9QB0qKrd4jGH5WIiKOqmlChgCdrz64rXN1mU1NctgpOLvvUE73dYWv-VqsEnxe7kjHK469XYS5n1PI1zLBhrHTe04o6khD2Nk_K9QY-Bak1KMjwNHLpvkJWHkD_DyllCY1ZORwpYVmdrbPNMYTc1DWpkQdNReeLg41ZDf_vgoy_pcL1-cn76fGWo1C1FVDY12IucgsCAF9-h2JmZ2yiYmiR87affjmI16hjQ54JQYuZmXQk1l8lAkiaNR9xFLYnnZbxXNxmFtq00VaK5c5FXHHwnir1gJSVdzgTvaTKsrTaGU7BTQ7eEt3QLOVU0QwYRkdHVP-HXIhWghnmew&animation=true) center / cover",
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
                background:
                  "url(https://attachment.outlook.live.net/owa/MSA%3ADAM180%40hotmail.com/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATZiZmYAZC05ZmFiLWI1ZjMtMDACLTAwCgBGAAADxeHU0ki%2BMEqWo4RJgW6WYgcA2emy4VqqikCQtSnD4NJvcgAAAgEMAAAA2emy4VqqikCQtSnD4NJvcgAD6cJRmQAAAAESABAAiVvv7wCvkEpFifBv%2F8o6QJM%3D&thumbnailType=2&owa=outlook.live.com&scriptVer=2020062804.02&isc=1&X-OWA-CANARY=jTfmE23CKUSdXBUP9wyl67CS27N7J9gYFos1uUYr3nZRhupnHlB7zZaH9AG7Wj968WcmrNxtjB4.&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjU2MzU4ODUyMzRCOTI1MkRERTAwNTc2NkQ5RDlGMjc2NTY1RjYzRTIiLCJ4NXQiOiJWaldJVWpTNUpTM2VBRmRtMmRueWRsWmZZLUkiLCJ0eXAiOiJKV1QifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2subGl2ZS5jb20iLCJ1YyI6ImFmZDIwODA4MGJlZjRmN2Q4NDc5NmJlZDllNWRiYTU5IiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInByaW1hcnlzaWRcIjpcIlMtMS0yODI3LTQ0MjM2NS0yNjc4ODMwNTc5XCIsXCJwdWlkXCI6XCIxODk5OTQ1ODg2NzI1NjE5XCIsXCJvaWRcIjpcIjAwMDZiZmZkLTlmYWItYjVmMy0wMDAwLTAwMDAwMDAwMDAwMFwiLFwic2NvcGVcIjpcIk93YURvd25sb2FkXCJ9IiwibmJmIjoxNTk0Njc5MDM3LCJleHAiOjE1OTQ2Nzk2MzcsImlzcyI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJhdWQiOiIwMDAwMDAwMi0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYXR0YWNobWVudC5vdXRsb29rLmxpdmUubmV0QDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImhhcHAiOiJvd2EifQ.qHgCw9QB0qKrd4jGH5WIiKOqmlChgCdrz64rXN1mU1NctgpOLvvUE73dYWv-VqsEnxe7kjHK469XYS5n1PI1zLBhrHTe04o6khD2Nk_K9QY-Bak1KMjwNHLpvkJWHkD_DyllCY1ZORwpYVmdrbPNMYTc1DWpkQdNReeLg41ZDf_vgoy_pcL1-cn76fGWo1C1FVDY12IucgsCAF9-h2JmZ2yiYmiR87affjmI16hjQ54JQYuZmXQk1l8lAkiaNR9xFLYnnZbxXNxmFtq00VaK5c5FXHHwnir1gJSVdzgTvaTKsrTaGU7BTQ7eEt3QLOVU0QwYRkdHVP-HXIhWghnmew&animation=true) center / cover",
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
                background:
                  "url(https://attachment.outlook.live.net/owa/MSA%3ADAM180%40hotmail.com/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATZiZmYAZC05ZmFiLWI1ZjMtMDACLTAwCgBGAAADxeHU0ki%2BMEqWo4RJgW6WYgcA2emy4VqqikCQtSnD4NJvcgAAAgEMAAAA2emy4VqqikCQtSnD4NJvcgAD6cJRmQAAAAESABAANxixb%2BsUEUebIwb23l1pCw%3D%3D&thumbnailType=2&owa=outlook.live.com&scriptVer=2020062804.02&isc=1&X-OWA-CANARY=vpnm9HFZBUKCY2kBU8RCB1DkK7l7J9gYtGwkBRhkjzoJ9y12Ov8M4xYGqEGvQ_vzTWvIbjz1MP4.&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjU2MzU4ODUyMzRCOTI1MkRERTAwNTc2NkQ5RDlGMjc2NTY1RjYzRTIiLCJ4NXQiOiJWaldJVWpTNUpTM2VBRmRtMmRueWRsWmZZLUkiLCJ0eXAiOiJKV1QifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2subGl2ZS5jb20iLCJ1YyI6ImFmZDIwODA4MGJlZjRmN2Q4NDc5NmJlZDllNWRiYTU5IiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInByaW1hcnlzaWRcIjpcIlMtMS0yODI3LTQ0MjM2NS0yNjc4ODMwNTc5XCIsXCJwdWlkXCI6XCIxODk5OTQ1ODg2NzI1NjE5XCIsXCJvaWRcIjpcIjAwMDZiZmZkLTlmYWItYjVmMy0wMDAwLTAwMDAwMDAwMDAwMFwiLFwic2NvcGVcIjpcIk93YURvd25sb2FkXCJ9IiwibmJmIjoxNTk0Njc5MDM3LCJleHAiOjE1OTQ2Nzk2MzcsImlzcyI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJhdWQiOiIwMDAwMDAwMi0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYXR0YWNobWVudC5vdXRsb29rLmxpdmUubmV0QDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImhhcHAiOiJvd2EifQ.qHgCw9QB0qKrd4jGH5WIiKOqmlChgCdrz64rXN1mU1NctgpOLvvUE73dYWv-VqsEnxe7kjHK469XYS5n1PI1zLBhrHTe04o6khD2Nk_K9QY-Bak1KMjwNHLpvkJWHkD_DyllCY1ZORwpYVmdrbPNMYTc1DWpkQdNReeLg41ZDf_vgoy_pcL1-cn76fGWo1C1FVDY12IucgsCAF9-h2JmZ2yiYmiR87affjmI16hjQ54JQYuZmXQk1l8lAkiaNR9xFLYnnZbxXNxmFtq00VaK5c5FXHHwnir1gJSVdzgTvaTKsrTaGU7BTQ7eEt3QLOVU0QwYRkdHVP-HXIhWghnmew&animation=true) center / cover",
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
        <footer style={{color:"red"}}>An Original Website Created By Damian Tapp</footer>
      </div>
    );
  }
}

export default Projects;
