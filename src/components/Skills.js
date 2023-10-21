
import React from 'react';
import { Grid } from '@material-ui/core';
import react from '../images/react.png';
import html5 from '../images/html5.png';
import css3 from '../images/css3.png';
import node from '../images/node.png';
import mongo from '../images/mongo.png';
import mysql from '../images/sql.png';
import XD from '../images/XD.png';
import figma from '../images/figma.png';
import PS from '../images/ps.png';
import java from '../images/java.png';
import git from '../images/git.png';
import LinearProgress from '@mui/material/LinearProgress';

const Skills = () => {
  return (
      <Grid id="skillsContainer" style={{paddingTop: "20vmin", paddingBottom:"20vmin"}}>
            <Grid item xs={12} md={1} ></Grid>
            <Grid item xs={12} md={4}>
                <h2 id="skillsTitle" className="titles">Skills & {window.innerWidth<550 ? <></> : <br/> }Knowledge</h2>
            </Grid>
            <Grid item xs={12} md={7}>
                <Grid item xs={12} md={6}>
                    <LinearProgress variant="determinate" value={50} style={{height:"1vmin", width:"30%"}} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <LinearProgress variant="determinate" value={50} style={{height:"1vmin", width:"30%"}} />
                </Grid>
            </Grid>
            
            {/* <Row >
              <Col id="skillsTitle" className="titles">Skills & <br/>Knowledge</Col>
              <Col></Col>
            </Row> */}
            {/* <Row style={{paddingBottom:"6vmin"}}>
            
                <Col xs="2" md="2"></Col>
                <Col xs="8" md="8">
                <Container>
                    <Row className='centering'>
                        <Col data-aos="zoom-in" data-aos-duration="400">
                        <Card  className='customCard'>
                        <Card.Img variant="top" src={react} className='customCardImg' ></Card.Img>
                        <Card.Title style={{fontSize:"2vmin"}}>ReactJS</Card.Title>
                        </Card>
                        </Col>
                        <Col></Col>
                        <Col data-aos="zoom-in" data-aos-duration="400">
                            <Card className='customCard'>
                                <Card.Img variant="top" src={node} className='customCardImg' ></Card.Img>
                                <Card.Title style={{fontSize:"2vmin"}}>NodeJS</Card.Title>
                            </Card>
                        </Col>
                        <Col></Col>
                        <Col data-aos="zoom-in" data-aos-duration="400">
                        <Card className='customCard'>
                                <Card.Img variant="top" src={html5} className='customCardImg'></Card.Img>
                                <Card.Title style={{fontSize:"2vmin"}}>HTML5</Card.Title>
                            </Card>
                        </Col>
                        <Col></Col>
                        <Col data-aos="zoom-in" data-aos-duration="400">
                        <Card className='customCard'>
                                <Card.Img variant="top" src={css3} className='customCardImg'></Card.Img>
                                <Card.Title style={{fontSize:"2vmin"}}>CSS3</Card.Title>
                            </Card>
                        </Col>
                        <Col></Col>
                        <Col data-aos="zoom-in" data-aos-duration="400">
                        <Card className='customCard'>
                                <Card.Img variant="top" src={java} className='customCardImg'></Card.Img>
                                <Card.Title style={{fontSize:"2vmin"}}>Java</Card.Title>
                            </Card>
                        </Col>
                        <Col></Col>
                        <Col data-aos="zoom-in" data-aos-duration="400">
                        <Card className='customCard'>
                                <Card.Img variant="top" src={mysql} className='customCardImg'></Card.Img>
                                <Card.Title style={{fontSize:"2vmin"}}>SQL</Card.Title>
                            </Card>
                        </Col>
                        <Col></Col>
                        <Col data-aos="zoom-in" data-aos-duration="400">
                        <Card className='customCard'>
                                <Card.Img variant="top" src={mongo} className='customCardImg'></Card.Img>
                                <Card.Title style={{fontSize:"2vmin"}}>MongoDB</Card.Title>
                            </Card>
                        </Col>
                        <Col></Col>
                        <Col data-aos="zoom-in" data-aos-duration="400">
                        <Card className='customCard'>
                                <Card.Img variant="top" src={XD} className='customCardImg'></Card.Img>
                                <Card.Title style={{fontSize:"2vmin"}}>Adobe XD</Card.Title>
                            </Card>
                        </Col>
                        <Col></Col>
                        <Col data-aos="zoom-in" data-aos-duration="400">
                        <Card className='customCard'>
                                <Card.Img variant="top" src={PS} className='customCardImg'></Card.Img>
                                <Card.Title style={{fontSize:"1.9vmin"}}>Photoshop</Card.Title>
                            </Card>
                        </Col>
                        <Col></Col>
                        <Col data-aos="zoom-in" data-aos-duration="400">
                        <Card className='customCard'>
                                <Card.Img variant="top" src={figma} className='customCardImg'></Card.Img>
                                <Card.Title style={{fontSize:"2vmin"}}>Figma</Card.Title>
                            </Card>
                        </Col>
                        <Col></Col>
                        <Col data-aos="zoom-in" data-aos-duration="400">
                        <Card className='customCard'>
                                <Card.Img variant="top" src={git} className='customCardImg'></Card.Img>
                                <Card.Title style={{fontSize:"2vmin"}}>Github</Card.Title>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                </Col>
                
                
                <Col xs="2"></Col>

            </Row> */}

            
      </Grid>
  );
}

export default Skills;
