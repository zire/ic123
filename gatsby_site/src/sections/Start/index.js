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
                        With all the above challenges. I have a few suggestions on how to do research the right way when you want to learn about crypto.
                      </Text>
                      <Text className="entry-one">
                        First, get on <a href="https://twitter.com/herbertyang">Twitter</a>. Everyone in crypto is on Twitter. After 20 years of social media, Twitter has now become the one and only place for intellectuals and KOLs in tech - it's certainly the largest. Instagram is for photo influencers. Reddit is an acquired taste with too many trolls. Facebook is for birthday reminders. Linkedin is a broken trainwreck where all the cool kids have already got off - it smells stale and looks utterly uninteresting. Reduce your time on local language site such as WeChat or Weibo to the minimum - they do have massive user base but generally have very, very low quality content that's not much better than opium. All the original content comes from Twitter. Try to read the source, not the second-hand Google-translated version. 
                      </Text>
                      <Text className="entry-one">
                        Second, when you run into one blockchain project after another, always ask the question "which lockchain is this dApp built on?" Blockchain industry consists of several major tribes - or we call ecosystems. Every ecosystem is built around a Layer-0 or Layer-1 protocol. Each ecosystem has its own legions of crypto funds, developers, node providers, wallets, games, NFT collections, NFT marketplace and decentralized apps (dApps). 
                      </Text>
                      <Text className="entry-one">
                        Third, do not make the naive assumption that Ethereum equals Blockchain. Ethereum is an influential protocol that has gathered huge amount of assets and almost all the crypto developers cut their teeth in the early days of Ethereum. However, there are many other blockchain protocols that are growing fast and may threaten the dominance of Ethereum. Bitcoin ecosystem is on its own - it can't do much other than being the store of value. Ethereum ecosystem is the dominance force where most of the NFT series are minted. Solana, Avalanche, NEAR, Polygon, Algorand, Binance Smart Contract (BSC) follow the footstep (and to varying degree, its code) of Ethereum and try to become a better version of Ethereum. Cardano is on their own planet. Polkadot and Cosmos are Layer-0 networks that try to connect multiple chains. The Internet Computer Protocol ("ICP") developed by DFINITY has expanded the boundary of blockchain industry significantly. Last but not the least, Arweave and Filecoin are two major IPFS networks that try to do distributed storage. If you come across an L0/1 blockchain that's not from this list, it's too small to matter.
                      </Text>
                      <Text className="entry-one">
                        Forth, always apply first principle by asking these two questions: 1) "who are its customers?" and 2) "what value does it bring to its customers?". This is the only way to validate whether a blockchain protocol or the many dApps built on it, can bring value to the society. You will find that many blockchain protocols or dApps are created to support another protocol. Keep tracing up the chain until the end customer becomes the average Joe in the street. Try this exercise and see how many dApps/L1 blockchains can actually bring you to a real retail customer Joe or enterprise customer Smith.  
                      </Text>
                      <Text className="entry-one">
                        Last, while it's natural to ask a few friends who seem to be closer to the crypto industry to get started, you should do your own research (DYOR). It's extremely difficult, if not impossible, to find a neutral voice in this industry. People are either too naive or too knee-deep in a camp already to tell you something objective - including myself. Read the white paper, conduct due dilligence on the team, observe how they conduct themselves on Twitter. Commit time to do this research and that's the only path to find truth or faith (always in relative terms) in crypto.
                      </Text>
                      <Text className="entry-three">
                        3. Where To Start
                      </Text>
                      <Text className="entry-one">

                      </Text>
                      <Text className="entry-one">
                        
                      </Text>
                      <Text className="entry-one">

                      </Text>
                      <Text className="entry-one">
                        
                      </Text>
                      <Text className="entry-one">

                      </Text>
                      <Text className="entry-one">
                        
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
