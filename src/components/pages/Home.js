import React from 'react'
import { Grid } from '@material-ui/core'
import SectionHeader from '../common/SectionHeader'

const Home = () => {
	return (
		<section id="home">
			<Grid container>
				<Grid item xs={10}>
					<SectionHeader sectionTitle="Jaskaran Singh" sectionDescription="Full-Stack Developer" />
				</Grid>
				<Grid item xs={2}>
					{/* <MenuIcon /> */}
				</Grid >
			</Grid >
		</section>
	)
}

export default Home
