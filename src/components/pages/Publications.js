import React from 'react'
import { Grid } from '@material-ui/core'
import NavDrawer from '../common/NavDrawer'
import SectionHeader from '../common/SectionHeader'
import PublicationCard from '../PublicationCard'

const Publications = () => {
	return (
		<section id="publications">
			<Grid container>
				<Grid item xs={10}>
					<SectionHeader sectionTitle="Publications" sectionDescription="I eat computers for breakfast!" />
				</Grid>
				<Grid item xs={2}>
					<NavDrawer />
				</Grid>
				<Grid container direction="column">
					<div id="publication-cards">
						<Grid item xs={12}>
							<PublicationCard />
						</Grid>
						<Grid item xs={12}>
							<PublicationCard />
						</Grid>
						<Grid item xs={12}>
							<PublicationCard />
						</Grid>
						<Grid item xs={12}>
							<PublicationCard />
						</Grid>
					</div>
				</Grid>
			</Grid>
		</section>
	)
}

export default Publications
