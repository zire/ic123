import React from "react"
import { Link } from "gatsby"
import { FaGooglePlay, FaApple } from "react-icons/fa"

import { Container, Row, Col } from "reusecore/Layout"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"
import Image from "reusecore/Image"
import { SectionTitle, SectionBackground } from "reusecore/SectionTitle"

import aboutImage from "assets/images/about/about.svg"
import AboutSectionWrapper from "./about.style"

const About = () => {
  return (
    <AboutSectionWrapper id="about">
      <Container>
        <Row>
          <Col className="lg-5 md-6 sm-12">
            <Image
              src={aboutImage}
              className="about-image"
              alt="cryptik about image"
            />
          </Col>
          <Col className="lg-6 offset-lg-1 md-6 sm-12">
            <Box className="about-right-content">
              <SectionTitle>
                <SectionBackground>
                  <Heading as="h1">
                    Most Scalable Blockchain Network
                  </Heading>
                </SectionBackground>
                <Text>
                The Internet Computer ("ICP") was developed by the DFINITY Foundation, 
                which was founded by Dominic Williams in 2016. 
                </Text>
              </SectionTitle>

              <Box className="about-list">
                <Text as="span">75% Distributed to Community.</Text>
                <Text as="span">13% Reserved Funding.</Text>
                <Text as="span">9% Founders and Team Management.</Text>
              </Box>

              {/*
              <Box className="about-btn-wrapper">
                <Link to="#" className="btn btn-fill">
                  {" "}
                  <FaGooglePlay /> Google Play
                </Link>
                <Link to="#" className="btn">
                  <FaApple /> Apple Store
                </Link>
              </Box>
              */}
              
            </Box>
          </Col>
        </Row>
      </Container>
    </AboutSectionWrapper>
  )
}

export default About
