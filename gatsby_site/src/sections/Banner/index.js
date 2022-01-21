import React from "react"
import { Link } from "gatsby"

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Badge from "reusecore/Badge"
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";

/*
import BannerImage from "assets/images/banners/banner-one/banner-one-thumb.svg"
import particleTopLeft from "assets/images/particles/banner/particle-top-left.png"
import particleUnderLogo from "assets/images/particles/banner/particle-under-logo.png"
import prticleTopRight from "assets/images/particles/banner/prticle-top-right.png"
import particleBottomLeft from "assets/images/particles/banner/particle-bottom-left.png"
import particleBottomRight from "assets/images/particles/banner/particle-bottom-right.png"
*/

import BannerWrapper from "./banner.style";

import xiaofeng_quote from "assets/images/deck/xiaofeng_quote.png"; 


const Banner = () => {
  return (
    <BannerWrapper>
      <Container>
        <Row>
          <Col className="lg-7 md-10 xs-12">
            <Box className="banner-content">
              {/*
              <Badge className="offer-text">
                14 days, a huge of free trial
              </Badge>
              */}
              <Heading>
                BLOCKCHAIN 3.0
              </Heading>
              <Text as="span" className="description">
                <p>In the ocean of a few thousand blockchains, why we still need ICP?
                While Bitcoin has become the store of value and Ethereum is becoming a popular protocol 
                to define asset ownership, ICP will be the blockchain network that runs web applications.
                </p>
                <p>
                All the things that can built on other chains, can be built on ICP as well, such as DeFi, NFT and tokens, at a lower cost, faster finality and higher capacity.
                All the things that cannot be built on other chains, can be built on ICP, such as everything from traditional Web2.
                </p>
              </Text>
              {/*
              <Box className="banner-btn">
                <Link to="#" className="btn btn-fill">
                  {" "}
                  Get in touch{" "}
                </Link>
                <Link to="#" className="btn">
                  {" "}
                  white paper{" "}
                </Link>
              </Box>
              */}
            </Box>
          </Col>
          <Col className="lg-5 md-6 sm-12">
            <img src={xiaofeng_quote} alt="xiao feng quote" width="493.537"/>
          </Col>
        </Row>
        {/*
        <img
          src={BannerImage}
          className="banner__thumb"
          alt="cryptik banner thumb"
        />
        */}
      </Container>
    </BannerWrapper>
  )
}

export default Banner
