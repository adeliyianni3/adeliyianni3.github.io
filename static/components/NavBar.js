import React, { Component } from 'react'
import {Navbar, Icon, NavItem, SideNav, SideNavItem, Row, Input, Button, Autocomplete} from 'react-materialize'
import ReactDOM from 'react-dom'
import Projects from './Projects'
import Scrollspy from 'react-scrollspy'

const styles = {
  fixed: {
    position: 'fixed',
    left: 2,
    top: 2
  },
}
function home() {
	ReactDOM.render((
     	<div>
			<Projects />
        </div>
     ),
     document.getElementById('app-content')
	);
}

export default () => (
	<Navbar className="grey darken-4 center">
		<a href="" className="brand-logo center">Antonia Deliyianni</a>
		<SideNav
		  	trigger={<Button floating large className="left grey darken-4 tooltipped" data-position="right" tooltip="Open Menu" style={styles.fixed}><Icon>menu</Icon></Button>}
		  	options={{ closeOnClick: true }}
		>
		<SideNavItem userView
		    user={{
		      	background: './static/img/bg_pic.jpg',
		      	image: './static/img/profile_pic.jpg',
		      	name: 'Antonia Deliyianni'
		    }} />
		    <SideNavItem href=""><Icon className="fas fa-home"></Icon>Home</SideNavItem>
		    <SideNavItem divider />
		  	<SideNavItem subheader>Links</SideNavItem>
		  	<SideNavItem href='https://github.com/adeliyianni3'><Icon className="fab fa-github"></Icon>Github</SideNavItem>
		  	<SideNavItem href='https://docs.google.com/document/d/1AH01buSpVXtzAdv7aoPx7lat5zi8aW8i1cnGPxjPyuA/edit?usp=sharing'><Icon className="fas fa-download"></Icon>Resume Download</SideNavItem>
		  	<Scrollspy items={ ['contacts'] } currentClassName="is-current">
		  		<SideNavItem href="#contacts"><Icon className="fas fa-comments"></Icon>Contacts</SideNavItem>
		  	</Scrollspy>
		</SideNav>
	</Navbar>
)
