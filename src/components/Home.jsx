import {Text,Box} from '@chakra-ui/react';
import Prabal_Kumar_Dwivedi_Resume from "./Prabal_Kumar_Dwivedi_Resume.pdf"
import "./Home.css"
const Home=()=>{
    return <div className='bg'>
    <Box id="Home" color={"white"}  w="90%" m="auto"   height={{base:"30vh",sm:"40vh",md:"60vh"}} mt={{base:"90",sm:"110"}}>

        <Text textAlign={{sm:"center",md:"left"}} mt={{sm:"80px",md:"200"}} fontSize={{base:"xl",sm:"xl",md:"2xl"}}  fontWeight="700">Hi, I am a</Text>
        <Text textAlign={{sm:"center",md:"left"}} fontSize={{base:"3xl",sm:"4xl",md:"5xl"}}  fontWeight="700">Full Stack Web Developer</Text>
        <div  class="login-box">
  
  <form>
    
    <a onClick={()=>{
      window.open("https://drive.google.com/file/d/1-Hhb4PGQx0ntTXM1gacghUfrHt38ilyD/view?usp=share_link","blank")
     }}
    href={Prabal_Kumar_Dwivedi_Resume}
      download="fw21_1273_Prabal_Kumar_Dwivedi_Resume"
    >
   
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Resume
    </a>
  </form>
</div>
    </Box>
    
    </div>
}

export default Home