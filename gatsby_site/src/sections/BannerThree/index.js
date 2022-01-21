import React from "react"

import { Container, Row, Col } from "reusecore/Layout"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"
import Input from "reusecore/Form/Input"
import Button from "reusecore/Button"

import BannerImage from "assets/images/banners/banner-three/cryptik-banner-three-thumb.svg"

/*
import particleTopLeft from "assets/images/particles/banner/particle-top-left.png"
import particleUnderLogo from "assets/images/particles/banner/particle-under-logo.png"
import prticleTopRight from "assets/images/particles/banner/prticle-top-right.png"
import particleBottomLeft from "assets/images/particles/banner/particle-bottom-left.png"
import particleBottomRight from "assets/images/particles/banner/particle-bottom-right.png"
*/

import BannerWrapper from "./banner.style"
import dfinity_team from 'assets/images/deck/dfinity_team.png';

const BannerThree = () => {
  return (
    <BannerWrapper>
      <Box className="banner-three-wrap">
        {/*
        <img
          src={particleTopLeft}
          className="section__particle top-left"
          alt="cryptik particles"
        />
        <img
          src={particleUnderLogo}
          className="section__particle two"
          alt="cryptik particles"
        />
        <img
          src={prticleTopRight}
          className="section__particle top-right"
          alt="cryptik particles"
        />
        <img
          src={particleBottomLeft}
          className="section__particle bottom-left"
          alt="cryptik particles"
        />
        <img
          src={particleBottomRight}
          className="section__particle bottom-right"
          alt="cryptik particles"
        />
        */}
        <Container>
          {/*
          <img
            className="banner__thumb"
            alt="cryptik banner thumb"
            src={BannerImage}
          />
          */}
          <Row>
            <Col className="lg-7 md-10 xs-12">
              <Box className="banner-content">
              <Heading>
                BEST IN CLASS
              </Heading>
              <Text as="span" className="description">
                <p>
                ICP was developed by the DFINITY Foundation, which was founded by Dominic Williams in 2016.
                It's headquartered in Zurich, Switzerland with over 200 employeess in Switzerland, US and over 20+
                countries. 
                </p>
                <p>
                DFINITY has assembled the largest crypto R&D team in the world and recruited many leading cryptographers and blockchain engineers, including an IEEE Fellow,
                a co-creator of Web Assembly and a co-creator of B-L-S algorithm, among many all-star scientists. 
                </p>
                <p>
                Find out more from <a href="https://dfinity.org">DFINITY's official website</a>.
                </p>
              </Text>
                {/*
                <Box className="input-box">
                  <Input type="email" placeholder="Enter your email" />
                  <Button>Create Account</Button>
                </Box>
                */}
              </Box>
            </Col>
            <Col className="lg-5 md-6 sm-12">
            <img src={dfinity_team} alt="xiao feng quote" width="493.537"/>
          </Col>
          </Row>
        </Container>
      </Box>
    </BannerWrapper>
  )
}

export default BannerThree
