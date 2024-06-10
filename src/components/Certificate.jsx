import { Box, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import certificate from "../Data/certificate.jpeg";
import "./Combine.css";

const Certificate = () => {
  return (
    <>
      <SimpleGrid
      // border={'2px solid red'}
        columns={{ base: 1, sm: 1, md: 1, lg: 2 }}
        width={"84%"}
        margin={"auto"}
        gap={{ base: 8, sm: 12, md: 16, lg: 24 }}
        py={{ base: 0, sm: 8, md: 12, lg: 20 }}
      >
        <Box margin={'auto'}>
          <Image src={certificate}/>
        </Box>
        <Stack
          gap={{ base: 2, sm: 4, md: 6, lg: 8 }}
          justifyContent={"center"}
          textAlign={{ base: "center", sm: "center", md: "center" }}
        >
          <Box>
            <Heading
              fontFamily={"roboto"}
              fontSize={{ base: 24, sm: 28, md: 32, lg: 32 }}
              fontWeight={500}
              color={"#171945"}
            >
              StockTutor
            </Heading>
          </Box>
          <Box>
            <Text
              fontFamily={"roboto"}
              color={"RGB(72 73 76)"}
              fontSize={{ base: 12, sm: 14, md: 14, lg: 16 }}
            >
              StockTutor appears to be an educational platform that collaborates
              with BSE Institute Limited to provide courses and certifications
              in stock market and finance-related subjects. The certificate in
              the image suggests that StockTutor offers examinations and courses
              validated by BSE Institute Limited, ensuring that the educational
              content is credible and recognized.
              <br/>
              <br/>
               The BSE Institute Limited,
              associated with the Bombay Stock Exchange (BSE), is known for its
              expertise in financial education and training. The involvement of
              BSE Institute Limited indicates that the courses offered by
              StockTutor are likely to be comprehensive and industry-relevant,
              aimed at equipping individuals with practical skills and knowledge
              in stock market operations and financial management.
            </Text>
          </Box>
        </Stack>
      </SimpleGrid>
    </>
  );
};

export default Certificate;
