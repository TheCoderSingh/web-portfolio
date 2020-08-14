import React from 'react'
import { Typography, Divider } from '@material-ui/core'

const SectionHeader = (props) => {
	return (
		<div className="section-header">
			<Typography className="header-title">
				{props.sectionTitle}
			</Typography>
			{/* <hr className="header-line" />
			<hr className="header-line" /> */}
			<Divider className="header-line" />
			<Divider className="header-line" />
			<Typography variant="body1" className="header-description">
				{props.sectionDescription}
			</Typography>
		</div>
	)
}

export default SectionHeader;
