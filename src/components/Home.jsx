import {Text,Box} from '@chakra-ui/react';
import "./Home.css"
const Home=()=>{
    return <>
    <Box id="Home"  w="90%" m="auto"  mt={{base:"20",sm:"20"}}>

        <Text textAlign={{sm:"center",md:"left"}} mt={{sm:"80px",md:"200"}} fontSize={{base:"xl",sm:"xl",md:"2xl"}}  fontWeight="700">Hi, I am a</Text>
        <Text textAlign={{sm:"center",md:"left"}} fontSize={{base:"3xl",sm:"4xl",md:"5xl"}}  fontWeight="700">Full Stack Web Developer</Text>
        <div  class="login-box">
  
  <form>
    
    <a href="https://drive.google.com/file/d/1-Hhb4PGQx0ntTXM1gacghUfrHt38ilyD/view?usp=share_link">
   
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Resume
    </a>
  </form>
</div>
    </Box>
    
    </>
}

export default Home