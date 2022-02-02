import React from "react"
import { Link } from "gatsby"

import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialPinterest,
  TiSocialLinkedin,
} from "react-icons/ti";
import { IoIosArrowRoundForward } from "react-icons/io"

import { Container, Row, Col } from "reusecore/Layout"
import Box from "reusecore/Box"
import Text from "reusecore/Text"
import Heading from "reusecore/Heading"
import Image from "reusecore/Image"
import { List, ListItem } from "reusecore/List"
import Button from "reusecore/Button"
import PageHeader from "../../components/PageHeader"

/*
import Sidebar from "../../components/Blog-sidebar"
*/

import heroImage from "assets/images/deck/Dfinity-Genesis-5.png"

import BlogPageWrapper from "./blogSingle.style"

const ArticleStartPage = () => {
  return (
    <BlogPageWrapper>
      <PageHeader title="Start" />
      <Box className="single-post-wrapper">
        <Container>
          <Row>
            <Col className="xs-12">
              <Row>
                <Col className="xs-12">
                  <Box className="single-post-block">
                    <Box className="post-thumb-block">
                      <Image src={heroImage} alt="Genesis Landing Page" />
                      <Box className="post-meta">
                        <Text as="span">
                          <Text as="em"> Feb 02</Text> 2022
                        </Text>
                      </Box>
                    </Box>
                    <Box className="post-content-block">
                      <Heading className="post-title">
                        Hitchhiker's Guide to Web3, Blockchain, the Internet Computer and DFINITY Foundation
                      </Heading>
                      <Text className="entry-three">
                        So, you're new to crypto but have heard about IC or DFINITY from some friends. You're curious to find out more and may be even interested in joining the DFINITY team or contributing to the IC community. How do you learn more about this industry, the DFINITY team and the Internet Computer, and how do you know if you have what it takes to excel in this new new industry?
                      </Text>
                      <Text className="entry-three">
                        Here's a guide that can help you get started to grasp some basic concepts and get your hands dirty in this exciting world of Web3, metaverse, crypto and revolutionary Internet technology.
                      </Text>

                      {/*
                      <blockquote>
                        You never change things by fighting the existing
                        reality.To change something, build a new model.
                      </blockquote>
                      */}
                      <Text className="entry-three">
                        Ao corrida ar queriam reparae do imposta acoitar do.
                        Qualidades intimativa aferventar ira acompanhar mau
                        capitListada enfraquece. Em apavorar ficarmos cantante
                        se ia blasonou eu comprido.

                        <a href="https://dfinity.org">DFINITY</a>
                        
                      </Text>

                      <Text className="entry-four">
                        Coracoes costumes grandeza com observou horrivel mas.
                        Amor tive fara de dado esse em. Ve es couberam oh
                        garrafal mListheres. Dourados duzentos voz lustroso diz
                        discutir ahi. Luzindo no do tremLista na so fallava.
                        Evitava tropheu curiosa ou agitado os acceite si
                        assiste. Voz veio veja tez digo cres.
                      </Text>
                    </Box>
                    <Box className="post-info-block">
                      {/*
                      <Box className="tags">
                        <Link to="#">#crypto</Link>
                        <Link to="#">#Landing</Link>
                        <Link to="#">#Bitcoin</Link>
                      </Box>
                      */}
                      <Box className="share">
                        <Link to="https://twitter.com/herbertyang">
                          <TiSocialTwitter />
                        </Link>
                        {/*
                        <Link to="#">
                          <TiSocialFacebook />
                        </Link>
                        <Link to="#">
                          <TiSocialLinkedin />
                        </Link>
                        */}
                      </Box>
                    </Box>

                  </Box>
                </Col>
              </Row>
            </Col>
            {/*
            <Col className="sm-12 lg-4">
              <Sidebar />
            </Col>
            */}
          </Row>
        </Container>
      </Box>
    </BlogPageWrapper>
  )
}

export default ArticleStartPage
