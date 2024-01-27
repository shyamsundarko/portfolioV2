import React, {useEffect, useState} from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import Aos from 'aos';

function Skill({skill}) {
    const [progressValue, setProgressValue] = useState(0);
    useEffect(()=>{
      Aos.init({duration: 100,
              anchorPlacement: "top-bottom"
      });
  },[])  
    
    return (
        <div className="indivSkill">
          {skill}
        </div>
    )
}

export default Skill