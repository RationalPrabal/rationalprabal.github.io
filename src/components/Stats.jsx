import React from 'react'
import GitHubCalendar from "react-github-calendar";
import { Box ,Text,Img} from '@chakra-ui/react'
import AOS from "aos";

import "aos/dist/aos.css";
const Stats = () => {
    AOS.init()
  return (
    <Box  mt={{base:"20",sm:"30",md:"65"}}    overflow="hidden">
    <Text as="b" fontSize="5xl">Stats</Text>
<Box display={{base:"grid", sm:"grid", md:"flex"}} justifyContent={{base:"center",sm:"center",md: "space-between"}} m="auto" w={{base:"100%",sm:"100%", md:"80%"}} mt="38">
    <Box m="auto" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="5000" >
        <Img src="https://github-readme-stats.vercel.app/api?username=rationalprabal&show_icons=true&locale=en&theme=dracula" />
    </Box>
    <Box mt={{base:"8",sm:"8",md:"0"}}  data-aos="fade-up"
     data-aos-anchor-placement="bottom-center">
        <Img src="https://github-readme-streak-stats.herokuapp.com/?user=rationalprabal&theme=dracula" />
    </Box>
</Box>
<Box mt="10" display={"flex"} justifyContent={"center"} data-aos="zoom-out-down">
    <Img src="https://github-readme-stats.vercel.app/api/top-langs?username=rationalprabal&show_icons=true&locale=en&theme=dracula&count_private=true&langs_count=8" alt="rationalprabal" />
</Box>
<Box m="auto" display="flex" justifyContent="center" mt={{base:"10",sm:"15",md:"58"}} data-aos="zoom-out">
    <GitHubCalendar style={{backgroundColor:"#282a36",color:"#78d6f6"}}  blockSize={14} blockMargin={6} color="#dd6387" username="RationalPrabal"/>
</Box>
</Box>
  )
}

export default Stats