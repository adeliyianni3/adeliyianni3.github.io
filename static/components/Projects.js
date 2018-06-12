import React, { Component } from 'react'
import {CardPanel, Row, Col, Chip } from 'react-materialize'
import Project from './Project'
import data from '../data/projects'
import ReactDOM from 'react-dom'


function passProject(value) {
	ReactDOM.render((
     	<div>
			<Project datum={value} />
        </div>
     ),
     document.getElementById('app-content')
	);
}
export default class Projects extends Component {
  	render() {
	    return (
	    	<div className="background">
		      	<div className='project-section'>
				  	<div>
				    	<section id="projects" className="container">
			    			{data.projects.map(function(item, i) {
				    			return <Row key={i}>
				    				{item.map(function(item, i) {
				    					return	<Col s={4}  key={i}>
				    						<a href={"#"+item.title.replace(/\s/g, '')} onClick={() => { passProject(item) }}>
								    			<CardPanel className='small proj-card'>
									    			<div className='section'>
									    				<img className="card-image-background" src= {item.image} width= '100%'></img>
									    				<h5 className='card-title'>{item.title}</h5>
									    				<p className='card-description proj-body'>{item.description}</p>
									    			</div>
									    			<div className='section custom-chip proj-body'>
									    				{item.tech.map(function(item, i) {
														    return <Chip key={i}>{item}</Chip>;
														})}
													</div>
												</CardPanel>
											</a>
										</Col>
									})}
								</Row>
							})}
				    	</section>
				  	</div>
				</div>
			</div>
	    );
	}
}