import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import logo from './../../assets/logo.svg';
import './styles.css';

class Header extends Component {
	render() {
		return (
			<div >
				<header className="app-header">
					<img src={logo} className="app-logo" alt="logo" />
					<div className='login-button'>
						<Button variant="contained" color="secondary">
							Login
            </Button>
					</div>

				</header>
			</div>
		)
	}
}

export default Header;