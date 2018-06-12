import React, { Component } from 'react'
import {Footer, Icon} from 'react-materialize'

export default () => (
  <Footer id="contacts"
    moreLinks={
      <a className="grey-text text-lighten-4 right">2018</a>
    }
    links= {
      <ul>
        <li><h6 className="grey-text text-lighten-3">Contacts</h6></li>
        <li className="grey-text text-lighten-3 contact-options">
          <Icon className="fas fa-phone-square left"></Icon>
          770-696-0203
        </li>
        <li className="grey-text text-lighten-3 contact-options">
          <Icon className="fas fa-envelope-square left"></Icon>
          antdeliyianni56@gmail.com
        </li>
      </ul>
    }
  >
      <h5 className="white-text">Antonia Deliyianni</h5>
      <p className="grey-text text-lighten-3">Simple website developed with React.js and Materialize.css</p>
  </Footer>
)