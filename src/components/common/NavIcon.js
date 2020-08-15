import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
// import { Icon } from '@material-ui/core';

const NavIcon = (props) => {
	let menuOpen = props.open

	if (menuOpen) {
		return (
			<div className="menu-icon">
				<MenuOpenIcon />
			</div>
		)
		menuOpen = false
	} else {
		return (
			<div className="menu-icon">
				<MenuIcon fontSize="large" style={{ color: 'white' }} />
			</div>
		)
	}
}

export default NavIcon;
