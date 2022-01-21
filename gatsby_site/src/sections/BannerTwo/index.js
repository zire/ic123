import React from "react";
import { Link } from "gatsby"

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Badge from "reusecore/Badge";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";

/*
import BannerImage from "assets/images/banners/banner-two/cryptik-banner-two-thumb.svg";
import particleTopLeft from "assets/images/particles/banner/particle-top-left.png";
import particleUnderLogo from "assets/images/particles/banner/particle-under-logo.png";
import prticleTopRight from "assets/images/particles/banner/prticle-top-right.png";
import particleBottomLeft from "assets/images/particles/banner/particle-bottom-left.png";
import particleBottomRight from "assets/images/particles/banner/particle-bottom-right.png";
*/

import {FaGithub} from 'react-icons/fa'

/*
import keyIcon from 'assets/images/banners/banner-two/cryptik-banner-key-icon.svg';
import watchIcon from 'assets/images/banners/banner-two/cryptik-banner-watch-icon.svg';
import heartIcon from 'assets/images/banners/banner-two/cryptik-banner-heart-icon.svg';
*/

import ic_stack from 'assets/images/banners/banner-two/ic_stack.png';
import contractIcon from 'assets/images/banners/banner-two/agreement-svgrepo-com.svg';
import webIcon from 'assets/images/banners/banner-two/web-svgrepo-com.svg';
import storageIcon from 'assets/images/banners/banner-two/storage-svgrepo-com.svg';

import BannerWrapper from "./banner.style";

const BannerTwo = () => {
  return (
    <BannerWrapper>
      {/*
      <img src={particleTopLeft} className="section__particle top-left" alt="cryptik particles"/>
      <img src={particleUnderLogo} className="section__particle two" alt="cryptik particles"/>
      <img src={prticleTopRight} className="section__particle top-right" alt="cryptik particles"/>
      <img src={particleBottomLeft} className="section__particle bottom-left" alt="cryptik particles"/>
      <img src={particleBottomRight} className="section__particle bottom-right" alt="cryptik particles"/>
      */}
      <Container>
        <Row>
          <Col className="lg-7 md-10 xs-12">
            <Box className="banner-content"> 
              <Heading>
                INTERNET COMPUTER <br/>
                Blockchain Singularity
              </Heading>
              <Text as="span" className="description">
                The world's most advanced blockchain protocol - ICP,  weaves together the computing capacity of node machines, run by independent parties
                in independent data centers around the world, into a single giant virtual machine. It's the first and only blockchain network that can
                host interactive web front-end, run smart contract securely with cryptographic signature and provide decentralized storage and computing infrastructure to all web developers.          
              </Text>

              <Box className="coin-info">
                <Box>
                  <Image src={contractIcon} alt="contract banner icon" />
                  <Text>Smart Contract</Text>
                </Box>
                <Box>
                  <Image src={webIcon} alt="web front banner icon" />
                  <Text>Web Front</Text>
                </Box>
                <Box>
                  <Image src={storageIcon} alt="storage banner icon" />
                  <Text>Storage & Computing</Text>
                </Box>
              </Box>

              {/*
              <Box className="banner-btn">
                <Link to="#" className="btn btn-fill">
                   <FaGithub /> Download Crypto 
                </Link> 
              </Box>
              */}

            </Box>
          </Col>
          <Col className="lg-5 md-6 sm-12">
            <img src={ic_stack} alt="ic stack" width="493.537"/>
          </Col>
        </Row>
      </Container>
    </BannerWrapper>
  );
};

export default BannerTwo;
