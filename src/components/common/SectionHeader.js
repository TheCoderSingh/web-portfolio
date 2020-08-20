import React from 'react'
import { Typography } from '@material-ui/core'

const SectionHeader = (props) => {
	return (
		<div className="section-header">
			<Typography className="header-title">
				{props.sectionTitle}
			</Typography>
			<Typography variant="body1" className="header-description">
				{props.sectionDescription}
			</Typography>
		</div>
	)
}

export default SectionHeader;
