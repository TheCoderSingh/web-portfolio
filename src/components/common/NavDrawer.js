import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import WorkIcon from '@material-ui/icons/Work';
import CodeIcon from '@material-ui/icons/Code';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ContactMailIcon from '@material-ui/icons/ContactMail';

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
});

export default function TemporaryDrawer() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === 'top' || anchor === 'bottom',
			})}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{['Home'].map((text, index) => (
					<ListItem button key={text} >
						<ListItemIcon>{<HomeIcon />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
				{['About Me'].map((text, index) => (
					<ListItem button key={text} >
						<ListItemIcon>{<PersonIcon />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
				{['Skills'].map((text, index) => (
					<ListItem button key={text} >
						<ListItemIcon>{<EmojiObjectsIcon />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
				{['Experience'].map((text, index) => (
					<ListItem button key={text} >
						<ListItemIcon>{<WorkIcon />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
				{['Projects'].map((text, index) => (
					<ListItem button key={text} >
						<ListItemIcon>{<CodeIcon />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
				{['Publications'].map((text, index) => (
					<ListItem button key={text} >
						<ListItemIcon>{<MenuBookIcon />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
				{['Contact Me'].map((text, index) => (
					<ListItem button key={text} >
						<ListItemIcon>{<ContactMailIcon />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div >
	);

	return (
		<div>
			{['right'].map((anchor) => (
				<React.Fragment key={anchor}>
					<Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
					<Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
}
