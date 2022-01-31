import React from 'react'
import ProjectHeader from './ProjectHeader'
import DesignContainer from './DesignContainer'
import CodingContainer from './CodingContainer'
import WebsiteContainer from './WebsiteContainer'

const PhotographyPro = ({check, title, txtColor,  headerText, designBody, codingBody, containerColor, icon1, icon2, icon3, website}) => {
    return (
        <div >
        
        <ProjectHeader check={check} title={title} headerText={headerText} />
        <DesignContainer txtColor={txtColor} designBody={designBody} />
        <CodingContainer containerColor={containerColor} codingBody={codingBody} icon1={icon1} icon2={icon2} icon3={icon3}/>
        <WebsiteContainer website={website} txtColor={txtColor}/>
        </div>
    )
}

export default PhotographyPro;
