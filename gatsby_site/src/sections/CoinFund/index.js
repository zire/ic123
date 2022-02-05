import React from "react"

import { Container, Row, Col } from "reusecore/Layout"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"
import { SectionTitle, SectionBackground } from "reusecore/SectionTitle"

import CoinFundWrapper from "./coinFund.style"

const CoinFund = () => {
  /*
  const settings = {
    count: 5432560, 
    showTitle: true,
    size: 60,
    labelSize: 14,
    backgroundColor: "transparent",
    color: "#fff",
    dayTitle: "Days",
    hourTitle: "Hours",
    minuteTitle: "Minutes",
    secondTitle: "Seconds",
    id: "countdownwrap"
  }
  */

  return (
    <CoinFundWrapper id="token">
      <Container>
        <Row>
          <Col className="lg-6 md-12 ">
            <Box className="coin-fund-content-left">
              <SectionTitle>
                <SectionBackground>
                  <Heading>
                    Team Introduction
                  </Heading>
                </SectionBackground>
                <Text>
                 200 people!
                </Text>
              </SectionTitle>

              {/*
              <Box className="btn-wrapper">
                <Link to="#" className="btn btn-fill">
                  Buy Token
                </Link>
              </Box>
              */}
              
            </Box>
          </Col>
          {/*
          <Col className="lg-6 md-12 countdown-wrap">
            <Box className="countdown-wrapper">
              <Text> Last moment to grab the token </Text>
              <CountdownTimer {...settings} />
            </Box>
            <Box className="progressbar-wrapper">
              <Box className="progressbar">
                <Text as="span">$5,097</Text>
              </Box>
              <Text as="span">$11,931</Text>
            </Box>

            <Box className="payment-getway">
              <Text as="span">
                {" "}
                <FaBitcoin />{" "}
              </Text>
              <Text as="span">
                {" "}
                <FaCcMastercard />{" "}
              </Text>
              <Text as="span">
                {" "}
                <FaCcVisa />{" "}
              </Text>
              <Text as="span">
                {" "}
                <FaCcDiscover />{" "}
              </Text>
            </Box>
          </Col>
          */}
        </Row>
      </Container>
    </CoinFundWrapper>
  )
}

export default CoinFund
