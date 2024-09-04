import React from "react";
import { Text, Box, Img } from "@chakra-ui/react";
import "./About.css";
import Prabalnew from "./Prabalnew.jpg";
const About = () => {
  return (
    <>
      <Box
        id="About"
        overflow="hidden"
        display={{ sm: "grid", md: "flex" }}
        w="80%"
        m="auto"
        mt={{ base: "20", sm: "40", lg: "100" }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          w={{ sm: "90%", md: "50%" }}
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <Box display={"flex"} justifyContent="center">
            <Text as="b" fontSize="3xl" mr="10px">
              I'm{" "}
            </Text>

            <div className="flip">
              <div>
                <div style={{ color: "green" }}>quick Learner</div>
              </div>
              <div>
                <div style={{ color: "red" }}>Prabal</div>
              </div>
              <div>
                <div style={{ color: "gold" }}>Adaptable</div>
              </div>
              <div>
                <div>quick Learner</div>
              </div>
              <div>
                <div style={{ color: "red" }}>Prabal</div>
              </div>
              <div>
                <div>Adaptable</div>
              </div>
            </div>
          </Box>

          <br></br>
          <br></br>
          <br></br>
          <Text as="b">
            Full Stack Web Developer with over 1 year of hands-on experience in
            designing, developing, and deploying dynamic web applications using
            the MERN stack . Skilled in designing and implementing robust web
            applications using a variety of technologies. Proficient in creating
            efficient and scalable solutions, staying current with industry best
            practices. Committed to delivering high quality software that meets
            business objectives.
          </Text>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="1500"
          w={{ sm: "90%", md: "30%" }}
          mt={{ base: "20", sm: "20" }}
        >
          <Img borderRadius="50%" m="auto" src={Prabalnew} />
        </Box>
      </Box>
    </>
  );
};

export default About;
