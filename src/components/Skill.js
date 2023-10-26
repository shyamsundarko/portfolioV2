import React, {useEffect, useState} from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import Aos from 'aos';

function Skill({skillImg, value}) {
    const [progressValue, setProgressValue] = useState(0);
    useEffect(()=>{
      Aos.init({duration: 100,
              anchorPlacement: "top-bottom"
      });
  },[])  
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
            <LinearProgress data-aos="zoom-in" variant="determinate" value={progressValue} className="progress" sx={{ height: '6px',
                backgroundColor: "#e3e4e6", borderRadius:"2px", border:"solid 0.7px #5f5f66",
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#3cd67a', // Background color
              }
        }} />
        </div>
    )
}

export default Skill