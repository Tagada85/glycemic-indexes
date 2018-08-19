import React from 'react'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'

const theme = createMuiTheme({
	palette: {
		primary: { main: '#26413C'},
		secondary: {main: '#8AB0AB'}
	}
})

function Theme(props){
	return (
		<MuiThemeProvider theme={theme}>
			{props.children}
		</MuiThemeProvider>
	)
}

export default Theme