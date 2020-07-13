import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="Landing-grid">
          <Cell col={12}>
            <img
              src="https://attachment.outlook.live.net/owa/MSA%3ADAM180%40hotmail.com/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATZiZmYAZC05ZmFiLWI1ZjMtMDACLTAwCgBGAAADxeHU0ki%2BMEqWo4RJgW6WYgcA2emy4VqqikCQtSnD4NJvcgAAAgEMAAAA2emy4VqqikCQtSnD4NJvcgAD0h1QHQAAAAESABAAzaL9KU6v4EmPSIk7P8ix8Q%3D%3D&thumbnailType=2&owa=outlook.live.com&scriptVer=2020060802.13.01&isc=1&X-OWA-CANARY=e-8bIgYwfEK7G1H-XLmR-OCh0DhtE9gY91NwBrJlMs5Yxo4Zkj7iqfQhcNRm4XMq1ZX8r2Mkvcc.&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjU2MzU4ODUyMzRCOTI1MkRERTAwNTc2NkQ5RDlGMjc2NTY1RjYzRTIiLCJ4NXQiOiJWaldJVWpTNUpTM2VBRmRtMmRueWRsWmZZLUkiLCJ0eXAiOiJKV1QifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2subGl2ZS5jb20iLCJ1YyI6IjA1M2Y2ZGQ5NzEwYjQzMjFiY2UwN2ExMGI4MjE2MWNkIiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInByaW1hcnlzaWRcIjpcIlMtMS0yODI3LTQ0MjM2NS0yNjc4ODMwNTc5XCIsXCJwdWlkXCI6XCIxODk5OTQ1ODg2NzI1NjE5XCIsXCJvaWRcIjpcIjAwMDZiZmZkLTlmYWItYjVmMy0wMDAwLTAwMDAwMDAwMDAwMFwiLFwic2NvcGVcIjpcIk93YURvd25sb2FkXCJ9IiwibmJmIjoxNTkyNDczODgxLCJleHAiOjE1OTI0NzQ0ODEsImlzcyI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJhdWQiOiIwMDAwMDAwMi0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYXR0YWNobWVudC5vdXRsb29rLmxpdmUubmV0QDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImhhcHAiOiJvd2EifQ.AHzpcpYy-QlcbVQAUMXvGtbIbko0e5ZcJcH82Sm7iu2_856Pm-D4ayr82KirR212d28Kbfsk5RCnXOU5OVmgS4sEA_j-qkubVFcj3KibZki9LT_jzVR54KypVm8E1h5lHfFeZGpllV_Lco9YXy2wEo0ZtHixM8rozN6aLnfiC2L6201qmEW2I12SJOstoHE5gR6nPl_7uayJejYXQoos6A-j0eJq-3WuCbsefcD9giot59t1V6cuy389tOoHgjZeqv4MyOJAd7CWzh7Wn-QWVHq3TxrU7raSeVpGnvT_1EjI-aZs2s6H336pvqSR2GWKgrdWi_ZSV7YCd_H9fa62GQ&animation=true"
              alt="profile-img"
              className="profile-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />

              <p>
                HTML/CSS | Bootstrap | JavaScript | React | MongoDB | Node.JS |
                Express
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="http://google.com"
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
