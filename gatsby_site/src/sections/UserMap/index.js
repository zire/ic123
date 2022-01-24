import React from "react"

import { Container, Row, Col } from "reusecore/Layout"
import { SectionTitle, SectionBackground } from "reusecore/SectionTitle"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"

import comparison from "assets/images/deck/comparison.png"
import UserMapWrapper from "./userMap.style"

const UserMap = () => {
  return (
    <UserMapWrapper id="comparison">
      <Box className="usermap-wrapper">
        <Container className="fluid">
          <Row>
            <Col className="md-12">
            <SectionTitle>
                  <SectionBackground>
                    <Heading as="h1">
                    Comparison
                    </Heading>
                  </SectionBackground>
              </SectionTitle>
            </Col>
          </Row>
          <Row>
            <Col className="md-12">
              <Box className="usermap-block">
                <img src={comparison} alt="" />
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </UserMapWrapper>
  )
}

export default UserMap
