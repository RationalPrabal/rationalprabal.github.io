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
    <br></br>
        <Text as="b">This project is about a website though which we can Plan and Learn with the help of AI 
            and can schedule our tasks effectively.
        </Text>
        <br></br>
        <br></br>
        <Text as="b" color={"#4FA095"}>A Solo project, developed in 4 days.</Text>

        <Box></Box>
        <Box display={"flex"} justifyContent={{base:"space-between",sm:"space-around" ,md:"space-between"}} w={{base:"80%",sm:"90%", md:"60%"}} m="auto" mt="5">
        <Button bg="blue">Github</Button>
        <Button bg="green">Live</Button>
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
    <br></br>
        <Text as="b">This project is about a website through which we can Track our diet, exercise, and health data</Text>
        <br></br>
        <br></br>
        <Text as="b" color={"#4FA095"}>A Colloberative Project, devoloped by the team of 5 Developers in 4 days. Project by lead by Me.</Text>
        <Box></Box>
        <Box display={"flex"} justifyContent={{base:"space-between",sm:"space-around" ,md:"space-between"}} w={{base:"80%",sm:"90%", md:"60%"}} m="auto" mt="5">
        <Button bg="blue">Github</Button>
        <Button bg="green">Live</Button>
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
    <br></br>
        <Text as="b">This Project is about a website through which we can Order various Veg & Non-Veg Fast-Foods.</Text>
        <br></br>
        <br></br>
        <Text as="b" color={"#4FA095"}>A Solo, developed in 4 days.</Text>
        <Box></Box>
        <Box display={"flex"} justifyContent={{base:"space-between",sm:"space-around" ,md:"space-between"}} w={{base:"80%",sm:"90%", md:"60%"}} m="auto" mt="5">
        <Button bg="blue">Github</Button>
        <Button bg="green">Live</Button>
        </Box>
    </Box>
</GridItem>
    </Grid>
  )
}

export default Projects