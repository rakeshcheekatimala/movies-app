import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import logo from './../../assets/logo.svg';
import Modal from 'react-modal';
import './styles.css';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			isOpen: false
		}
	}
	showModal = (e) => {
		e.preventDefault();
		this.setState({
			isOpen: true
		});
	}
	closeModal = (e) => {
		e.preventDefault();
		this.setState({
			isOpen: false
		});
	}
	render() {
		return (
			<div >
				<header className="app-header">
					<img src={logo} className="app-logo" alt="logo" />
					<div className='login-button'>
						<Button variant="contained" color="secondary" onClick={this.showModal}>
							Login
            </Button>
					</div>
				</header>
				<Modal ariaHideApp={false} isOpen={this.state.isOpen} contentLabel="Login" onRequestClose={this.closeModal}>
					This is a Modal
				</Modal>
			</div>
		)
	}
}

export default Header;