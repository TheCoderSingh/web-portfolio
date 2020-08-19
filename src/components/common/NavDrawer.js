import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import WorkIcon from '@material-ui/icons/Work';
import CodeIcon from '@material-ui/icons/Code';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ContactMailIcon from '@material-ui/icons/ContactMail';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
		textAlign: 'center'
	},
	menuContainer: {
		textAlign: 'right'
	}
}));

const NavDrawer = (props) => {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.menuContainer}>
			<IconButton
				color="inherit"
				aria-label="open drawer"
				onClick={handleDrawerOpen}
				edge="start"
				className={clsx(classes.menuButton, open && classes.hide)}
			>
				<MenuIcon fontSize="large" style={{ color: 'white' }} />
			</IconButton>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="right"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</div>
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
			</Drawer>
		</div>
	)
}

export default NavDrawer
