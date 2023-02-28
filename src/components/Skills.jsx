import React from 'react'
import "./Skills.css"
import AOS from "aos";

import "aos/dist/aos.css";
import { Box ,Text,Grid,GridItem,Img} from '@chakra-ui/react'
const Skills = () => {
    AOS.init()
    var arr=[
        {"img":"https://cdn-icons-png.flaticon.com/512/174/174854.png"}
        ,
        {"img":"https://cdn-icons-png.flaticon.com/512/732/732190.png"},
        {"img":"https://cdn-icons-png.flaticon.com/512/5968/5968292.png"},
        {"img":"https://cdn-icons-png.flaticon.com/512/520/520890.png"},
        {"img":"https://cdn-icons-png.flaticon.com/512/5968/5968322.png"},
        {"img":"https://cdn.iconscout.com/icon/free/png-256/redux-283024.png"},
        {"img":"data:image/png;base64,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"},
        {"img":"https://asset.brandfetch.io/idIq_kF0rb/idv3zwmSiY.jpeg"},
        {"img":"https://cdn-icons-png.flaticon.com/512/5968/5968381.png"},
        {"img":"https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png"},
        {"img":"https://cdn-icons-png.flaticon.com/512/8297/8297437.png"},
        {"img":"https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png"}
    ]


  return <Box id="Skills"  mt={{base:"20",sm:"40",md:"70"}}   overflow="hidden">
    <Text as="b" fontSize="5xl">Skills</Text>
<Box>
    <Grid templateColumns={{base:'repeat(1, 1fr)', sm :"repeat(2, 1fr)", md:'repeat(4, 1fr)'}} w={{base:"100%",sm:"100%",md:"75%"}} m="auto" textAlign={"center"}  mt={{base:"50",sm:"70",md:"100"}} rowGap={{base:"10",sm:"10",md:"20"}} >
        {arr.map(el=><GridItem  >
    
    <Box  data-aos="flip-up" data-aos-delay="300">
    <Img w="50%" m="auto" src={el.img} />
    </Box>



        </GridItem>)}
    </Grid>
</Box>
<Text as="b" fontSize="5xl">Tools</Text>
<Box w={{base:"90%",sm:"80%",md:"75%"}} display={{base:"grid", sm:"grid", md:"flex"}} justifyContent={"center"} m="auto" mt="20" rowGap={{base:"10",sm:"10",md:"20"}}>
    <Box display={"flex"} justifyContent={"center"} data-aos="flip-left" data-aos-delay="300">
        <Img w="50%" src="https://cdn-icons-png.flaticon.com/512/906/906324.png"/>
    </Box>
    <Box display={"flex"} justifyContent={"center"} data-aos="flip-left" data-aos-delay="300">
    <Img w="50%" src="https://cdn-icons-png.flaticon.com/512/4926/4926624.png"/>
    </Box>
    <Box display={"flex"} justifyContent={"center"} data-aos="flip-up" data-aos-delay="300">
    <Img w="50%" src="https://cdn-icons-png.flaticon.com/512/5968/5968929.png"/>
    </Box>
    <Box display={"flex"} justifyContent={"center"} data-aos="flip-right" data-aos-delay="300">
    <Img  src="https://cdn.iconscout.com/icon/free/png-256/netlify-3629537-3032320.png"/>
    </Box>
    <Box display={"flex"} justifyContent={"center"} data-aos="flip-right" data-aos-delay="300">
    <Img w="50%" src="https://static-00.iconduck.com/assets.00/vercel-icon-512x449-3422jidz.png"/>
    </Box>
</Box>


   </Box>
}

export default Skills