import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './static/components/Layout'
import Projects from './static/components/Projects'

    ReactDOM.render((
         	<div>
              	<Layout/>
            </div>
        ),
        document.getElementById('app')
    );
	ReactDOM.render((
     	<div>
			<Projects />
        </div>
     ),
     document.getElementById('app-content')
	);