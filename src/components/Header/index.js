import React, { useState } from 'react';
import { Button, Tabs, Tab, Typography, FormControl, InputLabel, Input } from '@material-ui/core';
import logo from './../../assets/logo.svg';
import Modal from 'react-modal';
import './styles.css';

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)'
	}
};

const TabContainer = (props) => {
	return (
		<Typography component="div" className='reset__padding'>
			{props.children}
		</Typography>
	)
}
const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const showModal = (e) => {
		e.preventDefault();
		setIsOpen(true)
	}

	const closeModal = (e) => {
		e.preventDefault();
		setIsOpen(false);
	}

	return (
		<div >
			<header className="app-header">
				<img src={logo} className="app-logo" alt="logo" />
				<div className='login-button'>
					<Button variant="contained" color="secondary" onClick={showModal}>
						Login
            </Button>
				</div>
			</header>
			<Modal ariaHideApp={false} isOpen={isOpen} contentLabel="Login" onRequestClose={closeModal} style={customStyles}>
				<Tabs value={value} onChange={handleChange} aria-label="Login Tabs" className="tabs">
					<Tab label="Login" {...a11yProps(0)} />
					<Tab label="Register" {...a11yProps(1)} />
				</Tabs>
				<TabContainer>
					<FormControl required>
						<InputLabel htmlFor="username">Username</InputLabel>
						<Input type="text" name="username" id="username" />
					</FormControl>
					<br /><br />
					<FormControl required>
						<InputLabel htmlFor="password">Password</InputLabel>
						<Input type="password" name="password" id="password" />
					</FormControl>
					<br /><br />
					<Button variant="contained" color="secondary" type="submit">Submit</Button>
				</TabContainer>
			</Modal >
		</div >
	)

}

export default Header;