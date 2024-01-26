import React from 'react'

import Grid from '@material-ui/core/Grid'

const Project = ({link, source, title, desc}) => {
  return (
    <Grid item xs={12} md={6} className="project">
        <a href={link} target='_blank' rel='noreferrer'>
            <Grid container >
                <img src={source} alt="image of project" className="projectImage" />
                <h3 className="projectTitle">{title}</h3>
                <p className="desc">{desc}</p>
            </Grid>
        </a>
    </Grid>
  )
}

export default Project