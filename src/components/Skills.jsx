import React from "react";
import "./Skills.css";
import AOS from "aos";

import "aos/dist/aos.css";
import { Box, Text, Grid, GridItem, Img } from "@chakra-ui/react";
const Skills = () => {
  AOS.init();
  var arr = [
    {
      img: "https://img.shields.io/badge/html5-e36028?style=for-the-badge&logo=html5",
    },
    {
      img: "https://img.shields.io/badge/css3-2449d8?style=for-the-badge&logo=css3",
    },
    {
      img: "https://img.shields.io/badge/javascript-e4d04b?style=for-the-badge&logo=javascript",
    },
    {
      img: "https://img.shields.io/badge/React-5ccfee?style=for-the-badge&logo=react",
    },
    {
      img: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
    },
    {
      img: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
    },
    {
      img: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
    },
    {
      img: "https://img.shields.io/badge/Mongo DB-e8eaed?style=for-the-badge&logo=mongodb",
    },
    {
      img: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
    },
    {
      img: "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
    },
    {
      img: "https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34",
    },
    {
      img: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
    },
    {
      img: "https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux",
    },
    {
      img: "https://img.shields.io/badge/Cypress-64c89e?style=for-the-badge&logo=cypress",
    },
    {
      img: "https://img.shields.io/badge/-AntDesign-%230170FE?style=for-the-badge&logo=ant-design&logoColor=white",
    },
    {
      img: "https://img.shields.io/badge/Chakra UI-2abfb3?style=for-the-badge&logo=chakra ui",
    },
    {
      img: "https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white",
    },

    {
      img: "https://img.shields.io/badge/Rest API-2962ff?style=for-the-badge&logo=api",
    },
    {
      img: "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white",
    },
    {
      img: "https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white",
    },
  ];

  return (
    <Box id="Skills" mt={{ base: "20", sm: "40", md: "70" }} overflow="hidden">
      <Text as="b" fontSize="5xl">
        Skills
      </Text>
      <Box>
        <Grid
          templateColumns={{
            base: "repeat(3, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          w={{ base: "100%", sm: "100%", md: "75%" }}
          m="auto"
          textAlign={"center"}
          mt={{ base: "50", sm: "70", md: "100" }}
          rowGap={{ base: "10", sm: "10", md: "20" }}
        >
          {arr.map((el) => (
            <GridItem>
              <Box data-aos="flip-up" data-aos-delay="300">
                <Img m="auto" src={el.img} />
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Box mt="70">
        <Text as="b" fontSize="5xl">
          Tools
        </Text>
      </Box>
      <Grid
        w={{ base: "100%", sm: "80%", md: "75%" }}
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        justifyContent={"center"}
        m="auto"
        mt="20"
        rowGap={{ base: "10", sm: "10", md: "20" }}
      >
        <GridItem>
          {" "}
          <Box
            display={"flex"}
            justifyContent={"center"}
            data-aos="flip-left"
            data-aos-delay="300"
          >
            <Img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" />
          </Box>
        </GridItem>
        <GridItem>
          <Box
            display={"flex"}
            justifyContent={"center"}
            data-aos="flip-left"
            data-aos-delay="300"
          >
            <Img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" />
          </Box>
        </GridItem>
        <GridItem>
          <Box
            display={"flex"}
            justifyContent={"center"}
            data-aos="flip-up"
            data-aos-delay="300"
          >
            <Img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" />
          </Box>
        </GridItem>
        <GridItem>
          <Box
            display={"flex"}
            justifyContent={"center"}
            data-aos="flip-right"
            data-aos-delay="300"
          >
            <Img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" />
          </Box>
        </GridItem>
        <GridItem>
          <Box
            display={"flex"}
            justifyContent={"center"}
            data-aos="flip-right"
            data-aos-delay="300"
          >
            <Img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" />
          </Box>
        </GridItem>
        <GridItem>
          <Box
            display={"flex"}
            justifyContent={"center"}
            data-aos="flip-right"
            data-aos-delay="300"
          >
            <Img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Skills;
