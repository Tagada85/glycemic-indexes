import React, { Component } from 'react'
import './App.css'
import Grid from '@material-ui/core/Grid'

import Header from './front/components/Header'
import HomePage from './front/pages/HomePage'
import AboutPage from './front/pages/AboutPage'
import IndexesList from './front/pages/IndexesLists'
import BackOffice from './back/pages/BackOffice'
import Theme from './front/Theme'
import {
	BrowserRouter,
	Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
			<Theme>
				<BrowserRouter>
					<Grid>
						<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
						<Header />
						<Route exact path="/" component={HomePage}/>
						<Route path="/indexes" component={IndexesList}/>
						<Route path="/about" component={AboutPage}/>
						<Route path="/back" component={BackOffice} />
					</Grid>
				</BrowserRouter>
			</Theme>
    );
  }
}

export default App;
