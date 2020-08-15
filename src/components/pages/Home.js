import React, { useRef } from 'react'
import { Grid, Button, Typography } from '@material-ui/core'
import SectionHeader from '../common/SectionHeader'
import NavIcon from '../common/NavIcon'
import ScrollIcon from '../ScrollIcon'
import NavDrawer from '../common/NavDrawer'
import About from './About'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const Home = () => {
	const myRef = useRef(null)
	const executeScroll = () => { scrollToRef(myRef); }

	return (
		<React.Fragment>
			<section id="home">
				<Grid container>
					<Grid item xs={10}>
						<SectionHeader sectionTitle="Jaskaran Singh" sectionDescription="Full-Stack Developer" />
					</Grid>
					<Grid item xs={2}>
						<NavIcon open={false} />
						<NavDrawer />
					</Grid>
					<Grid item xs={12} id="btn-container">
						<Button variant="outlined" size="large" id="resume-btn">
							Download My Resume
        			</Button>
					</Grid>
					<Grid item xs={12}>
						<Typography id="scroll-text">
							Scroll down to see how awesome I am...
					</Typography>
					</Grid>
					<Grid item xs={12} onClick={executeScroll} >
						<ScrollIcon />
					</Grid>
				</Grid >
			</section>
			<About refProp={myRef} />
		</React.Fragment>
	)
}

export default Home
