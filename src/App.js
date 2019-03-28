import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import rinkData from './rinkinformation'

import './App.css';
import BasicInformation from './Components/rinkBasics';
import PartyInformation from './Components/rinkParties';
import MissionStatement from './Components/rinkMission';
import SimpleMap from './Components/map';
import Header from './Components/Header'
import Main from './Components/Main'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost, faPaperPlane, faEnvelope, faPhone, faMapMarker, faBirthdayCake } from '@fortawesome/free-solid-svg-icons'
library.add(faGhost)
library.add(faPaperPlane)
library.add(faEnvelope)
library.add(faPhone)
library.add(faMapMarker)
library.add(faBirthdayCake)



class App extends Component {
  constructor() {
    super()
    this.state = {
      rink: {},
      //Change back to True
      visible: true
    }
    this.changeVisibility = this.changeVisibility.bind(this);
    this.goToRedirect = this.goToRedirect.bind(this);
  }

  getRinkData() {
    this.setState({ rink: rinkData })
  }

  changeVisibility() {
    this.setState({ visible: !this.state.visible })
  }

  goToRedirect(pathString) {
    window.history.pushState("", "", pathString)
  }

  componentWillMount() {
    this.getRinkData();
  }

  componentDidMount() {
    this.getRinkData();
  }

  render() {
    const isVisible = this.state.visible;
    return (
      <div className="App">
        <div>
          <header className="App-header">
            <Header />
            <Main rink={this.state.rink} />
          </header>
          <div className="App-Content">
            <MissionStatement mission={this.state.rink.basics.missionStatement} />
            <div className="w3-content w3-container w3-padding-64" id="contact">
              <h3 className="w3-center">Contact Us!</h3>
              <p className="w3-center"><em>We would love your feedback!</em></p>

              <div className="w3-row w3-padding-32 w3-section">
                <div className="w3-col m4 w3-container">
                  <div id="googleMap" className="w3-round-large w3-greyscale" style={{ width: "100%", height: "400px" }}>
                    <SimpleMap />
                  </div>
                </div>
                <div className="w3-col m8 w3-panel">
                  <div className="w3-large w3-margin-bottom w3-left-align">
                    <FontAwesomeIcon icon="map-marker" /> Johnson City, TN<br />
                    <FontAwesomeIcon icon="phone" /> Phone: 926-2726<br />
                    <FontAwesomeIcon icon="envelope" /> Email: easttnskate@charter.net<br />
                  </div>
                  <form method="post" className="w3-left">
                    <div className="w3-row-padding" style={{ margin: "0 -16px 8px -16px" }}>
                      <div className="w3-half">
                        <input className="w3-input w3-border" type="text" placeholder="Your Name" required name="Name" id="form-name" />
                      </div>
                      <div className="w3-half">
                        <input className="w3-input w3-border" type="text" placeholder="Your Email" required name="Email" id="form-email" />
                      </div>
                    </div>
                    <input className="w3-input w3-border" type="text" placeholder=" Your Message" required name="Body" id="form-comment" />
                    <button className="w3-button w3-black w3-left w3-section" type="submit" id="form-submit">
                      <FontAwesomeIcon icon="paper-plane" /> SEND MESSAGE
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <footer className="App-footer">
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
