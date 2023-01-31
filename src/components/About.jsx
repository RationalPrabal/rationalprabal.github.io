import React from 'react'
import {Text,Box,Img} from '@chakra-ui/react';
import "./About.css"
import Prabal from "./Prabal.png.png"
const About = () => {
  return (
<>
<Box id="About"  overflow="hidden" display={{sm:"grid" ,md:"flex"}} w="90%" m="auto" mt={{base:"20",sm:"40",lg:"100"}} alignItems="center" justifyContent="space-between">
<Box w={{sm:"90%",md:"50%"}} data-aos="zoom-in" data-aos-duration="1500">
  <Box display={"flex"} justifyContent="center">
    <Text as="b" fontSize="3xl" mr="10px">I'm </Text>
    
  <div className="flip">
    <div><div style={{color:"green"}}>quick Learner</div></div>
    <div><div style={{color:"red"}}>Prabal</div></div>
    <div><div style={{color:"gold"}}>Adaptable</div></div>
    <div><div>quick Learner</div></div>
    <div><div style={{color:"red"}}>Prabal</div></div>
    <div><div>Adaptable</div></div>
  </div>
 
  </Box>

    <br></br>
    <br></br>
    <br></br>
    <Text as="b">
A Quick Learner and a Passionate Full Stack Web Developer with 1200+hours hands-on experience in coding. Have built 5 major projects, 50+ minor projects and learnt all the mentioned Tech Stack within the last 6 months . Looking forward to work as a responsible and competent employee in an exciting organization.
    </Text>
</Box>
<Box data-aos="zoom-in" data-aos-duration="1500" w={{sm:"90%",md:"30%"}} mt={{base:"20",sm:"20"}}>
    <Img borderRadius="50%" src={Prabal}/>
</Box>
</Box>
</>
  )
}

export default About