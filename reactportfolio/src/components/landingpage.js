import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="Landing-grid">
          <Cell col={12}>
            <img
              src="https://attachment.outlook.live.net/owa/MSA%3ADAM180%40hotmail.com/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATZiZmYAZC05ZmFiLWI1ZjMtMDACLTAwCgBGAAADxeHU0ki%2BMEqWo4RJgW6WYgcA2emy4VqqikCQtSnD4NJvcgAAAgEMAAAA2emy4VqqikCQtSnD4NJvcgAD604osgAAAAESABAAmKAFC0R7d0CRsbZmAfjkdA%3D%3D&thumbnailType=2&owa=outlook.live.com&scriptVer=2020061402.02&isc=1&X-OWA-CANARY=OCcQDeVQWUiI4QPKOjnD1dCCKbsHGNgY79fID403W3Us7I2HubHB21UlVXi8_rYWNKpQLMUS8C0.&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjU2MzU4ODUyMzRCOTI1MkRERTAwNTc2NkQ5RDlGMjc2NTY1RjYzRTIiLCJ4NXQiOiJWaldJVWpTNUpTM2VBRmRtMmRueWRsWmZZLUkiLCJ0eXAiOiJKV1QifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2subGl2ZS5jb20iLCJ1YyI6IjkwMDU3OTdiZTZhMTQyMjFhOTFhMzE4ZWVlOTRiMjc3IiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInByaW1hcnlzaWRcIjpcIlMtMS0yODI3LTQ0MjM2NS0yNjc4ODMwNTc5XCIsXCJwdWlkXCI6XCIxODk5OTQ1ODg2NzI1NjE5XCIsXCJvaWRcIjpcIjAwMDZiZmZkLTlmYWItYjVmMy0wMDAwLTAwMDAwMDAwMDAwMFwiLFwic2NvcGVcIjpcIk93YURvd25sb2FkXCJ9IiwibmJmIjoxNTkyOTgwMDY4LCJleHAiOjE1OTI5ODA2NjgsImlzcyI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJhdWQiOiIwMDAwMDAwMi0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYXR0YWNobWVudC5vdXRsb29rLmxpdmUubmV0QDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImhhcHAiOiJvd2EifQ.XrZgXvr8nWAdlt_kJ1-NfA-moDsDfh8oXIjgeL68wM7DV1-pt7D2J-lluI_QPUqR91dzeB_6aolPvyP_0W0wdEKtpWoOBSPYeEiTFvghg3y3-lbg52mf33bN2KuphsFDqg3_q8CAk4HLnJ0GE3YLDac1K1ijbitNIfu0JkdEg70c8NhNhl6JJZrd1QsWyYOpp7ZsVxZQJlqrTuJph72eW4gLoWE4KGLYdKazqSvQDCFVdRPoYtRY4bOPAXULhAtPPYyEujgiLEa4-geDUFPx_hUMC5kO2dviugJ9vwhZqn6C8ES9TDruptZWqysddttq2KALmhyIk29jYuKORTPAWw&animation=true"
              alt="avatar"
              style={{ height: "250px" }}
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
                  href="https://au.linkedin.com/in/damian-tapp-584b56198"
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
