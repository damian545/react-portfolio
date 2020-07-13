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
              <h3 style={{ paddingTop: "2em" }}>Damian Tapp</h3>
              <img
                src="https://attachment.outlook.live.net/owa/MSA%3ADAM180%40hotmail.com/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATZiZmYAZC05ZmFiLWI1ZjMtMDACLTAwCgBGAAADxeHU0ki%2BMEqWo4RJgW6WYgcA2emy4VqqikCQtSnD4NJvcgAAAgEMAAAA2emy4VqqikCQtSnD4NJvcgAD604osgAAAAESABAAmKAFC0R7d0CRsbZmAfjkdA%3D%3D&thumbnailType=2&owa=outlook.live.com&scriptVer=2020061402.02&isc=1&X-OWA-CANARY=OCcQDeVQWUiI4QPKOjnD1dCCKbsHGNgY79fID403W3Us7I2HubHB21UlVXi8_rYWNKpQLMUS8C0.&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjU2MzU4ODUyMzRCOTI1MkRERTAwNTc2NkQ5RDlGMjc2NTY1RjYzRTIiLCJ4NXQiOiJWaldJVWpTNUpTM2VBRmRtMmRueWRsWmZZLUkiLCJ0eXAiOiJKV1QifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2subGl2ZS5jb20iLCJ1YyI6IjkwMDU3OTdiZTZhMTQyMjFhOTFhMzE4ZWVlOTRiMjc3IiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInByaW1hcnlzaWRcIjpcIlMtMS0yODI3LTQ0MjM2NS0yNjc4ODMwNTc5XCIsXCJwdWlkXCI6XCIxODk5OTQ1ODg2NzI1NjE5XCIsXCJvaWRcIjpcIjAwMDZiZmZkLTlmYWItYjVmMy0wMDAwLTAwMDAwMDAwMDAwMFwiLFwic2NvcGVcIjpcIk93YURvd25sb2FkXCJ9IiwibmJmIjoxNTkyOTgwMDY4LCJleHAiOjE1OTI5ODA2NjgsImlzcyI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJhdWQiOiIwMDAwMDAwMi0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYXR0YWNobWVudC5vdXRsb29rLmxpdmUubmV0QDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImhhcHAiOiJvd2EifQ.XrZgXvr8nWAdlt_kJ1-NfA-moDsDfh8oXIjgeL68wM7DV1-pt7D2J-lluI_QPUqR91dzeB_6aolPvyP_0W0wdEKtpWoOBSPYeEiTFvghg3y3-lbg52mf33bN2KuphsFDqg3_q8CAk4HLnJ0GE3YLDac1K1ijbitNIfu0JkdEg70c8NhNhl6JJZrd1QsWyYOpp7ZsVxZQJlqrTuJph72eW4gLoWE4KGLYdKazqSvQDCFVdRPoYtRY4bOPAXULhAtPPYyEujgiLEa4-geDUFPx_hUMC5kO2dviugJ9vwhZqn6C8ES9TDruptZWqysddttq2KALmhyIk29jYuKORTPAWw&animation=true"
                alt="avitar"
                style={{ height: "350px" }}
              />
            </div>

            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Hello, my name is Damian Tapp. I am 46 years old and looking to
              change my current job from a Factory Worker to a Web Developer.
              Learning coding for the first time has been exciting and scary all
              at the same time. But I am really enjoying it, I have learnt a lot
              things to do with computing languages and I have completed many
              activities.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50px" }} />
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>0402 123 456</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Web</h5>
            <p>damiantapp.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50px" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={1987}
              endYear={1992}
              schoolName="Christies Beach High School"
              schoolDiscription="High school for 4.5 years, to only complete half of year 12."
            />

            <Education
              startYear={2019}
              endYear={2020}
              schoolName="Adelaide University"
              schoolDiscription="Completed a 6 month course in web development, called a coding bootcamp."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear={1993}
              endYear={2020}
              jobName="Factory Worker at Monroe Australia"
              jobDiscription="Currently working as a Forklift operator, Crane operator and Tubemill operator"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Language Skills</h2>
            <Skills skill="Javascript" progress={60} />
            <br />
            <Skills skill="HTML/CSS" progress={100} />
            <br />
            <Skills skill="Node.JS" progress={30} />
            <br />
            <Skills skill="MongoDB" progress={30} />
            <br />
            <Skills skill="React.JS" progress={65} />
            <br />
            <Skills skill="JQuery" progress={35} />
            <br />
            <Skills skill="MySQL" progress={25} />
            <br />
            <Skills skill="Express" progress={25} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
