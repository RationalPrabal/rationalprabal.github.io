import {Text,Box,Input,Textarea,Button} from '@chakra-ui/react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Contact=()=>{
    return <>
    <Box id="Contact" mt={{base:"30", sm:"50",md:"70"}}>
    <Text   fontSize={"5xl" } as="b" >Interested to work together? Let's talk</Text>
    </Box>
    <Box display={{base:"grid",sm:"grid", md:"flex"}} w="80%" m="auto" justifyContent={{base:"center",sm:"center",md:"space-between"}}>
    <Box  w={{base:"100%", sm:"100%", md:"30%"}}>
<Box bg="#000048" m="5" >
<EmailIcon style={{color:"BB001B"}}/>
<br></br>
<Text as="b" color="white">Email</Text>
<br></br>
<Text as="b"color="white">prabal19999@gmail.com</Text>
<br></br>
<Text as="b" color="#2179ab" onClick={()=>{
        window.location.href="mailto:prabal19999@gmail.com"}}>Send a Message</Text>
</Box>
<Box bg="#000048" m="5" >
    <WhatsAppIcon style={{color:"#25D366"}} />
    <br></br>
    <Text as="b" color="white">WhatsApp</Text>
    <br></br>
    <Text as="b" color="white">8463891744</Text>
    <br></br>
    <Text as="b" color="#2179ab" onClick={()=>{
        window.location.href="https://api.whatsapp.com/send?phone=8463891744"
    }

    }>Send a Message</Text>
</Box>
<Box bg="#000048" m="5" >
<GitHubIcon style={{color:"#4078c0"}}/>
    <br></br>
    <Text as="b" color="white">GitHub</Text>
    <br></br>
    <Text as="b" color="white">Prabal</Text>
    <br></br>
    <Text as="b" color="#2179ab" onClick={()=>{
        window.location.href="https://github.com/RationalPrabal"
    }

    }>Contact</Text>
</Box>
    </Box>
    <Box  w={{base:"100%", sm:"100%", md:"60%"}}>
        <br></br>
<Input mt="5" placeholder="Your Full Name" />

<Input mt="10" placeholder="Your Email Adress" />

<Textarea mt="10" size="5xl" placeholder="Enter your Message here" />
<Button bg="#000048" mt="8" color="white">Submit</Button>
    </Box>
    </Box>
<Box fontWeight="bold">    Made With   <FavoriteIcon style={{ color: "red" }}/>   By Prabal
</Box>
    </>
}

export default Contact