import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import NavBar from './NavBar'
import Footer from './Footer'


const styles = {
  app: {
    paddingTop: 0
  },
}

export default class Layout extends Component {
  render() {
    return (
        <div style={styles.app} ref="layout">
          <NavBar />
          <div id="app-content"></div>
          <Footer />
        </div>
    );
  }
}