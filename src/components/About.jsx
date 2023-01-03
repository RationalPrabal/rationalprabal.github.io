import React from 'react'
import {Text,Box,Img} from '@chakra-ui/react';
import Prabal from "./Prabal.png.png"
const About = () => {
  return (
<>
<Box display={{sm:"grid" ,md:"flex"}} w="90%" m="auto" mt={{base:"20",sm:"40",lg:"200"}} alignItems="center" justifyContent="space-between">
<Box w={{sm:"90%",md:"50%"}}>
    <Text as="b" fontSize="5xl">I am Prabal</Text>
    <br></br>
    <br></br>
    <br></br>
    <Text as="b">
A Quick Learner and Passionate Full Stack Web Developer with 1200+hours hands-on experience in coding. Have built 5 major projects, 50+ minor projects and learnt all the mentioned Tech Stack within the last 6 months . Looking forward to work as a responsible and competent employee in an exciting organization.
    </Text>
</Box>
<Box w={{sm:"90%",md:"30%"}} mt={{base:"20",sm:"20"}}>
    <Img borderRadius="50%" src={Prabal}/>
</Box>
</Box>
</>
  )
}

export default About