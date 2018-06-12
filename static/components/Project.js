import React, { Component } from 'react'
import {Parallax, CardPanel, Row, Col, Icon, Chip, Button} from 'react-materialize'



function addVideo(obj) {
	if(obj.includes('facebook') || obj.includes('youtube')) {
		return <iframe src={obj} className="frame vid" scrolling="no" allowTransparency="true" allowFullScreen="true"></iframe>
	}
}
function setLiveLink(link) {
	if(link != "" && link != null) {
		return (
			<Button href={link} node='a' className="btn-flat tooltipped" data-position="right" tooltip="Live Link"><Icon className="fas fa-link"></Icon></Button>
		)
	}
}

function setHeader(aHeader, classGiven, headerType) {
	if (aHeader!="" && aHeader!=null) {
		if (headerType=="h3") {
			return (
				<h3 className={classGiven}>
					{aHeader}
				</h3>
			)
		} else if (headerType=="h5") {
			return (
				<h5 className={classGiven}>
					{aHeader}
				</h5>
			)
		} else if (headerType=="h6") {
			return (
				<h6 className={classGiven}>
					{aHeader}
				</h6>
			)
		}
	}
}
export default class Project extends Component {
  	render() {
  		const {datum} = this.props;
	    return (
	      	<div id={datum.title.replace(/\s/g, '')}>
			  	<div className="individual-proj">
					<div className="valign-wrapper">
						<div className="overlay">
    						<h1 className="white-text center-align proj-title">{datum.title}</h1>
    					</div>
			  			<Parallax className="para" imageSrc={datum.image} />
			  		</div>
			  		<div className="background">
				  		<div className="container">
					  		<Row>
							    <Col s={9}>
							        <section className="container">
							    		{datum.section.map(function(item, i) {
							    			return (
							    				<div key={i}>
								    				{setHeader(item.header, "header", "h3")}
								    				{item.headerBody.map(function(item, i) {
										    			return (
											    			<div key={i}>
											    				{setHeader(item.subheader, "proj-body", "h5")}
											    				<p className="proj-body indent" key={i}>{item.body}</p>
											    			</div>
											    		)
										    		})}
										    	</div>
									    	)
								    	})}

							    		{datum.demo.map(function(item, i) {
							    			return (
							    				<div key={i}>
							    					{setHeader(item.header, "proj-body", "h3")}
								    				{item.headerBody.map(function(item, i) {
										    			return (
										    				<div key={i}>
											    				{setHeader(item.subheader, "proj-body", "h5")}
											    				{item.body.map(function(item, i) {
											    					return (
											    						<CardPanel key={i}>
											    							{setHeader(item.subheader, "proj-body", "h6")}
											    							{addVideo(item.link)}
											    						</CardPanel>
											    					)
											    				})}
											    			</div>
											    		)
										    		})}
										    	</div>
										    )
								    	})}
										<div className="center">
						    				<img className="proj-img" src={datum.footer.image}></img>
						    				{setHeader(datum.footer.citations, "header", "h6")}
							    		</div>
							    	</section>
							    </Col>
							    <Col s={3}>
							        <CardPanel className="main-card">
							            <div>
							            	<p>Project Links</p>
							    			<Button node='a' href={datum.gitlink} className="btn-flat tooltipped" data-position="right" tooltip="GitHub Link"><Icon className="fab fa-github"></Icon></Button>
							    			{setLiveLink(datum.livelink)}
							    		</div>
										<div className='section custom-chip'>
											<p>Tags</p>
											{datum.tech.map(function(item, i) {
												return <Chip key={i}>{item}</Chip>;
											})}
										</div>
							        </CardPanel>
							    </Col>
							</Row>
				  		</div>
			  		</div>
			  	</div>
			</div>
	    );
	}
}