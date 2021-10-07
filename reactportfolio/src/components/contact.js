import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2 style={{ fontSize: "45px", fontFamily: "Anton", textShadow: "3px 3px 5px black"  }}>Damian Tapp</h2>
            <img
              src="/images/damiantapp.jpg"
              alt="profile picture"
              style={{ height: "280px" }}
            />
            <p style={{ width: "80%", margin: "auto", paddingTop: "1em", fontSize:"20px" }}>
              If you want to get in contact with me, throw me an email or give
              me a call and we can chat about what we can do.
            </p>
          </Cell>
          <Cell col={6}>
            <h2 style={{ fontSize: "40px", fontFamily: "Anton", textShadow: "3px 3px 5px black" }}>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" style={{color: "blue",textShadow: "3px 3px 5px black"  }} />
                    0402 123 456
                  </ListItemContent>
                </ListItem>
<hr style={{ width:"95%"}}/>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" style={{color: "blue", textShadow: "3px 3px 5px black" }}/>
                    someone@example.com
                  </ListItemContent>                  
                </ListItem>                
              </List>
              <hr/>
            </div>
          </Cell>          
        </Grid>
        <footer style={{color:"red"}}>An Original Website Created By Damian Tapp</footer>
      </div>
    );
  }
}

export default Contact;
