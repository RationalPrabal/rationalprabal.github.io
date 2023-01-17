import React from 'react'
import { Box,Text,Grid,GridItem,Img, Button } from '@chakra-ui/react'
import ayoa from "./ayoa.png"
import cronofit from "./cronofit.png"

import goodcluck from "./goodcluck.png"
const Projects = () => {

  return (
    <Grid m="auto" w="80%" mt={{base:"50",sm:"50",md:"70"}}> 
        <Text as="b" fontSize={"5xl" } >Projects</Text>
<GridItem display={{base:"grid",sm:"grid",md:"flex"}} justifyContent="space-between" mt={{base:"50",sm:"70",md:"100"}}>
    <Box w={{base:"80%", sm:"90%",md:"40%"}} m="auto">
        <Img src={ayoa} />
    </Box>
    <Box w={{base:"80%", sm:"90%",md:"40%"}} m="auto">
        <Text as="b" fontSize={"3xl"} color="red">Ayoa.com Clone</Text>
   
    <br></br>
        <Text as="b">This project is about a website though which we can Plan and Learn with the help of AI 
            and can schedule our tasks effectively.
        </Text>
        
        <br></br>
        <Text as="b" color={"#4FA095"}>A Solo project, developed in 4 days.</Text>
<br></br>
<br></br>
        <Box display="flex" justifyContent="space-between" w={{base:"80%",sm:"80%", md:"60%"}} m="auto">
            <Box bg="#f15d00" as="b">HTML</Box>
            <Box bg="#0287ce" as="b">CSS</Box>
            <Box bg="yellow" as="b">JavaScript</Box>
        </Box>
        <Box display={"flex"} justifyContent={{base:"space-between",sm:"space-around" ,md:"space-between"}} w={{base:"80%",sm:"90%", md:"60%"}} m="auto" mt="5">
       <Button onClick={()=>{
        window.location.href="https://github.com/RationalPrabal/-complete-verse-5539"
       }} bg="blue">Github</Button>
        <Button onClick={()=>{
        window.location.href="https://frolicking-kelpie-5c21d5.netlify.app/"
       }} bg="green" >Live</Button>
        </Box>
    </Box>
</GridItem>
<GridItem display={{base:"grid",sm:"grid",md:"flex"}} justifyContent="space-between" mt={{base:"50",sm:"70",md:"100"}}>
<Box w={{base:"80%", sm:"90%",md:"40%"}} m="auto">
<Img src={cronofit} />
</Box>
    <Box w={{base:"80%", sm:"90%",md:"40%"}} m="auto">
    <Text as="b" fontSize={"3xl"} color="red">Cronofit</Text>
    
    <br></br>
        <Text as="b">This project is about a website through which we can Track our diet, exercise, and health data</Text>
        
        <br></br>
        <Text as="b" color={"#4FA095"}>A Colloberative Project, devoloped by the team of 5 Developers in 4 days. Project by lead by Me.</Text>
        <br></br>
<br></br>
        <Box display="flex" justifyContent="space-between" w={{base:"80%",sm:"80%", md:"60%"}} m="auto">
            <Box bg="#f15d00" as="b">HTML</Box>
            <Box bg="#0287ce" as="b">CSS</Box>
            <Box bg="yellow" as="b">JavaScript</Box>
        </Box>
        <Box display={"flex"} justifyContent={{base:"space-between",sm:"space-around" ,md:"space-between"}} w={{base:"80%",sm:"90%", md:"60%"}} m="auto" mt="5">
        <Button onClick={()=>{
        window.location.href="https://github.com/RationalPrabal/spotless-thumb-400"
       }} bg="blue">Github</Button>
        <Button onClick={()=>{
        window.location.href="https://radiant-muffin-05b02a.netlify.app/"
       }} bg="green">Live</Button>
        </Box>
    </Box>
</GridItem>
<GridItem display={{base:"grid",sm:"grid",md:"flex"}} justifyContent="space-between" mt={{base:"50",sm:"70",md:"100"}}>
<Box w={{base:"80%", sm:"90%",md:"40%"}} m="auto">
<Img src={goodcluck}  justifyContent="space-between" />
</Box>
    <Box w={{base:"80%", sm:"90%",md:"40%"}} m="auto">
    <Text as="b" fontSize={"3xl"} color="red">Good Cluck</Text>
    
    <br></br>
        <Text as="b">This Project is about a website through which we can Order various Veg & Non-Veg Fast-Foods.</Text>
        
        <br></br>
        <Text as="b" color={"#4FA095"}>A Solo, developed in 4 days.</Text>
        <br></br>
<br></br>
        <Box display="flex" justifyContent="space-between" w={{base:"80%",sm:"80%", md:"60%"}} m="auto">
            <Box bg="#56ffff" as="b">React JS</Box>
            <Box bg="#00a399" as="b">Chakra-UI</Box>
            <Box bg="#444477" as="b">REST API</Box>
        </Box>
        <Box display={"flex"} justifyContent={{base:"space-between",sm:"space-around" ,md:"space-between"}} w={{base:"80%",sm:"90%", md:"60%"}} m="auto" mt="5">
        <Button onClick={()=>{
        window.location.href="https://github.com/RationalPrabal/square-play-2692"
       }} bg="blue">Github</Button>
        <Button onClick={()=>{
        window.location.href="https://goodcluck.netlify.app/"
       }} bg="green">Live</Button>
        </Box>
    </Box>
</GridItem>
    </Grid>
  )
}

export default Projects