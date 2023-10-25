import React, {useEffect, useState} from 'react'
import LinearProgress from '@mui/material/LinearProgress';

function Skill({skillImg, value}) {
    const [progressValue, setProgressValue] = useState(0);
    useEffect(() => {
        const targetValue = value; 
        const interval = setInterval(() => {
          setProgressValue(prevValue => {
            const newValue = prevValue + 1;
            if (newValue >= targetValue) {
              clearInterval(interval); // Stop the interval when target value is reached
              return targetValue; 
            }
            return newValue;
          });
        }, 45); // interval in milliseconds
    
        return () => clearInterval(interval); // Cleanup interval on component unmount
      }, []);
    return (
        <div className="indivSkill">
            <img src={skillImg} alt="skill img alt" className="skillImg" />
            <LinearProgress variant="determinate" value={progressValue} className="progress" sx={{ height: '1.3vmin',
                backgroundColor: "#e3e4e6", borderRadius:"4px", border:"solid 2px #c5c7c6",
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#595a5c', // Background color
              }
        }} />
        </div>
    )
}

export default Skill