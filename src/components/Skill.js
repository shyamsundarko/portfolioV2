import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';

function Skill({skillImg}) {
  return (
    <div>
        <img src={skillImg} alt="skill img alt" className="skillImg" />
        <LinearProgress variant="determinate" value={50} className="progress" sx={{ height: '7px' }} />
    </div>
  )
}

export default Skill