import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Router from './Router'
import {withStyles} from '@material-ui/core/styles'

const styles = () => ({
	root: {
		flexGrow: 1
	}
})

class Header extends React.Component {
	render(){
		const {classes} = this.props
		return (
			<React.Fragment>
				<AppBar 
					position='static'
					color='default'>
					<Toolbar>
						<Typography
							className={classes.root}
							variant='headline'
							color='primary'>
							Get my glycemic index!
						</Typography>
						<Router />
					</Toolbar>
				</AppBar>
			</React.Fragment>
		)
	}
}

export default withStyles(styles)(Header)