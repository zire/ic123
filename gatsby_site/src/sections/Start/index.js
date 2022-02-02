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
                      <Text className="entry-one">
                        So, you're new to crypto but have heard about IC or DFINITY from some friends. You're curious to find out more and may be even interested in joining the DFINITY team or contributing to the IC community. How do you learn more about this industry, the DFINITY team and the Internet Computer, and how do you know if you have what it takes to excel in this new new industry?
                      </Text>
                      <Text className="entry-one">
                        Here's a guide that can help you get started to grasp some basic concepts and get your hands dirty in this exciting world of Web3, metaverse, crypto and revolutionary Internet technology.
                      </Text>
                      <Text className="entry-three">
                        1. Challenges of Learning Blockchain
                      </Text>
                      <Text className="entry-one">
                        Learning about blockchain/crypto is not easy. Everyone is talking about it. Every media is tossing around buzzwords like Web3, metaverse as if the future has already arrived and you're going to miss the train. Everyone seems to have strong opinion about it with very divided views. People from different blockchain camps diss each other and everyone thinks she is the prom queen.
                      </Text>
                      <Text className="entry-one">
                        Blockchain is a very complex subject that weaves together sophisticated concepts from economics, investment, finance, mathematics, cryptography, software, Internet, and even sociology. There is overwhelming amount of information available that's hard to keep up with. It's an Amazon jungle with a large variety of sub-ecosystems all vying for supermacy with their own drum-beat. 
                      </Text>
                      <Text className="entry-one">
                        There are many notions in blockchain that are hard to fathom. For one, many are always trapped in the debate on why BTC is worth so much and why it's not another Tulip Mania. Some say blockchain is a database, but some say they don't use database any more; some say it's a continuously growing network with smart contract, but some say they don't know how to interact with these smart contracts. And ... why are those jpeg photos worth half a million dollars? 
                      </Text>
                      <Text className="entry-one">
                        Last but not the least challenge is that, information decays very fast in blockchain. What you read three months ago may have already become obsolete now. The trending topics at the moment seem to be rotating at a lightning speed. Just when you think you've got a hang of something, that thing is no longer hot and something else has taken over the airwave. It's very tiring and confusing to keep track of things.
                      </Text>
                      <Text className="entry-three">
                        2. How To Do Research
                      </Text>
                      <Text className="entry-one">
                        With all the above challenges. I have a few suggestions on how to do research, the right way in crypto. 
                      </Text>
                      <Text className="entry-three">
                        3. What To Start
                      </Text>
                      <Text className="entry-three">
                        4. How to Try Out ICP
                      </Text>
                      <Text className="entry-three">
                        5. How Is This Job Different?
                      </Text>
                      <Text className="entry-three">
                        6. What Kind of People Makes Good Fit?
                      </Text>
                      <Text className="entry-three">
                        7. Proof-of-Commitment
                      </Text>
                      {/*
                      <blockquote>
                        You never change things by fighting the existing
                        reality.To change something, build a new model.
                      </blockquote>
                      */}
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
