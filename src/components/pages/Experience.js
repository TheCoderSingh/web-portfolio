import React from 'react'
import { Grid } from '@material-ui/core'
import NavIcon from '../common/NavIcon'
import NavDrawer from '../common/NavDrawer'
import SectionHeader from '../common/SectionHeader'
import ExperienceCard from '../ExperienceCard'

const Experience = () => {
	return (
		<section id="experience">
			<Grid container>
				<Grid item xs={10}>
					<SectionHeader sectionTitle="Experience" sectionDescription="I eat computers for breakfast!" />
				</Grid>
				<Grid item xs={2}>
					<NavIcon open={false} />
					<NavDrawer />
				</Grid>
			</Grid>
			<Grid container direction="column">
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<ExperienceCard place="Notice App" title="Digital Marketing Intern" titleID="noticeapp" />
					</Grid>
					<Grid item xs={6}>
						<ExperienceCard place="Statusbrew" title="Bootcamp Intern" titleID="statusbrew" />
					</Grid>
				</Grid>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<ExperienceCard place="Geekers Technologies" title="Software Engineer (Development In-Charge)" titleID="geekers" />
					</Grid>
					<Grid item xs={6}>
						<ExperienceCard title="Freelancer" place="Netscrew Technologies" titleID="netscrew" />
					</Grid>
				</Grid>
			</Grid>
		</section>
	)
}

export default Experience
