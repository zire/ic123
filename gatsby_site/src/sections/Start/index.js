import React from "react"
import { Link } from "gatsby"

import {
  TiSocialTwitter,
} from "react-icons/ti";


import { Container, Row, Col } from "reusecore/Layout"
import Box from "reusecore/Box"
import Text from "reusecore/Text"
import Heading from "reusecore/Heading"
import Image from "reusecore/Image"
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
                        Second, when you run into one blockchain project after another, always ask the question <b>"Which blockchain is this dApp built on?"</b>. Blockchain industry consists of several major tribes - or we call ecosystems. Every ecosystem is built around a Layer-0 or Layer-1 protocol. Each ecosystem has its own legions of crypto funds, developers, node providers, wallets, games, NFT collections, NFT marketplace and decentralized apps (dApps). 
                      </Text>
                      <Text className="entry-one">
                        Third, do not make the naive assumption that Ethereum equals Blockchain. Ethereum is an influential protocol that has gathered huge amount of assets and almost all the crypto developers cut their teeth in the early days of Ethereum. However, there are many other blockchain protocols that are growing fast and may threaten the dominance of Ethereum. Bitcoin ecosystem is on its own - it can't do much other than being the store of value. Ethereum ecosystem is the dominance force where most of the NFT series are minted. Solana, Avalanche, NEAR, Polygon, Algorand, Binance Smart Contract (BSC) follow the footstep (and to varying degree, its code) of Ethereum and try to become a better version of Ethereum. Cardano is on their own planet. Polkadot and Cosmos are Layer-0 networks that try to connect multiple chains. The Internet Computer Protocol ("ICP") developed by DFINITY has expanded the boundary of blockchain industry significantly. Last but not the least, Arweave and Filecoin are two major IPFS networks that try to do distributed storage. If you come across an L0/1 blockchain that's not from this list, it's too small to matter.
                      </Text>
                      <Text className="entry-one">
                        Forth, always apply first principle by asking these two questions: 1) <b>"Who are its customers?"</b> and 2) <b>"What value does it bring to its customers?"</b>. This is the only way to validate whether a blockchain protocol or the many dApps built on it, can bring value to the society. You will find that many blockchain protocols or dApps are created to support another protocol. Keep tracing up the chain until the end customer becomes the average Joe in the street. Try this exercise and see how many dApps/L1 blockchains can actually bring you to a real retail customer Joe or enterprise customer Smith.  
                      </Text>
                      <Text className="entry-one">
                        Last, while it's natural to ask a few friends who seem to be closer to the crypto industry to get started, you should do your own research (DYOR). It's extremely difficult, if not impossible, to find a neutral voice in this industry. People are either too naive or too knee-deep in a camp already to tell you something objective - including myself. Read the white paper, conduct due dilligence on the team, observe how they conduct themselves on Twitter. Commit time to do this research and that's the only path that will reveal truth or faith (always in relative terms) in crypto.
                      </Text>
                      <Text className="entry-three">
                        3. Where to Start on Web3 and Crypto
                      </Text>
                      <Text className="entry-one">
                        First, get on Twitter. You can start following these few to get started. 
                        <ul>
                          <li><a href="https://twitter.com/elonmusk">Elon Musk</a> The one that moves the market</li>
                          <li><a href="https://twitter.com/VitalikButerin">Vitalik Buterin</a> Creator of Ethereum</li>
                          <li><a href="https://twitter.com/dominic_w">Dominic Williams</a> Founder of DFINITY</li>
                          <li><a href="https://twitter.com/LynAldenContact">Lyn Alden</a> One of the best working economists today, especially on inflation</li>
                          <li><a href="https://twitter.com/ballmatthew">Matthew Ball</a> Prolific writer on Metaverse and Gaming</li>
                          <li><a href="https://twitter.com/naval">Naval Ravikant</a> The Yoda that utters words of deep thoughts</li>
                          <li><a href="https://twitter.com/balajis">Balaji Srinivasan</a> Crypto intellectual tour de force</li>
                          <li><a href="https://twitter.com/WuBlockchain">Wu Blockchain</a> Crypto news from China and the world</li>
                          <li><a href="https://twitter.com/OdailyChina">Odaily China Crypto News</a> One of the few remaining crypto media outlets that still report out of China</li>
                          <li><a href="https://twitter.com/i/lists/1449651877751050242">Chinese Crypto Twitter Hall of Famer</a> A widely followed list of 63 prominent Chinese KOLs in crypto</li>
                        </ul>
                      </Text>
                      <Text className="entry-one">
                        Podcast provides the best fresh contents on crypto. Below are my favorites. Be careful on your dosage. They can be very addictive - for sheer high-quality speakers and contents that could induce high level of stress, anxiety and FOMO.
                        <ul>
                          <li><a href="https://linktr.ee/Bankless">Bankless</a> Weekly crypto news, one of the best in the business</li>
                          <li><a href="https://www.techmeme.com/">Techmeme</a> Daily crypto/tech news in usually 20-minute segments</li>
                          <li><a href="https://lexfridman.com/podcast/">Lex Fridman Podcast</a> Best interviewer on technology with all-star speakers like Elon Musk, Charles Hoskinson and Neal Stephenson</li>
                          <li><a href="https://linktr.ee/timferriss">Tim Ferriss Podcast</a> Best interviewer in general with speakers like Jamie Foxx, Naval, Vitalik and Nick Szabo</li>
                          <li><a href="https://www.laurashin.com/podcast/">Unchained Podcast by Laura Shin</a> Twice-weekly podcast on all things crypto</li>
                        </ul>
                      </Text>
                      <Text className="entry-one">
                        Books, unfortunately are just too slow for crypto. By the time a book is published, most likely it's already obsolete. A few can either withstand the test of time or provide rich enough historic background that would still be helpful today.
                        <ul>
                          <li><a href="https://www.amazon.com/Bitcoin-Standard-Decentralized-Alternative-Central/dp/1119473861/ref=sr_1_1?crid=1ZTVHX03U8YC9&keywords=bitcoin+standard&qid=1643942302&sprefix=bitcoin+standard%2Caps%2C603&sr=8-1">The Bitcoin Standard: The Decentralized Alternative to Central Banking</a> Saifedean Ammous' seminal book on Bitcoin to answer the most frequently asked question in crypto </li>
                          <li><a href="https://www.amazon.com/Infinite-Machine-Crypto-hackers-Building-Internet-ebook/dp/B07X8HS2WC/ref=sr_1_5?crid=AQP29TA7J2V7&keywords=ethereum&qid=1643942433&sprefix=ethereum%2Caps%2C534&sr=8-5">The Infinite Machine: How an Army of Crypto-hackers Is Building the Next Internet with Ethereum</a> Camila Russo's book vividly captures the early days when Ethereum was created. Fun read to understand the origin of crypto's dominant culture and key players.</li>
                          <li><a href="https://www.amazon.com/Snow-Crash-Novel-Neal-Stephenson-ebook/dp/B000FBJCJE/ref=sr_1_1?crid=29JPOCJM0TVTI&keywords=snow+crash&qid=1643942639&sprefix=snow+cras%2Caps%2C687&sr=8-1">Snow Crash</a> Neal Stephenson's famed sci-fi noval published in 1992 introduced the concept of metaverse </li>
                        </ul>
                      </Text>
                      <Text className="entry-one">
                        Reading whitepaper is the right way to usher yourself into the world of blockchain/crypto. We like it hard-core.
                        <ul>
                          <li><a href="https://bitcoin.org/bitcoin.pdf">Bitcoin: A Peer-to-Peer Electronic Cash System by Satoshi Nakamoto in 2008</a> It's a masterpiece that should be enshrined in US Library of Congress. You probably will not fully understand it, but you should still read it and try to soak in as much as possible.</li>
                          <li>
                            <a href="https://ethereum.org/en/whitepaper/">Ethereum Whitepaper by Vitalik Buterin in 2013</a> Vitalik introduced smart contract to blockchain, that forever changed the face of the Internet.
                          </li>
                        </ul>
                      </Text>
                      <Text className="entry-one">
                        This is the best times for writers, people who can articulate their thoughts and build an audience with their narratives. Writing is the easiest way to establish credibility and gain respect. Most people I follow are writing on either Substack or Ghost. I used to subscribe to 20+ newsletters - I still do, but I just don't have time to read them any more. Crypto is moving too fast. Between Twitter and Podcast, I get 90% of what I need to know. 
                      </Text>
                      <Text className="entry-three">
                        4. Where To Start on DFINITY and ICP
                      </Text>
                      <Text className="entry-one">
                        It's important to read from the right sources. <a href="https://dfinity.org/">DFINITY's official website</a> is your jump-off point, where you will find all things DFINITY and IC. <a href="https://twitter.com/dfinity">DFINITY's Twitter account</a> has the latest information and official announcement. <a href="https://dashboard.internetcomputer.org/">ICA Dashboard</a> from <a href="https://internetcomputer.org/">Internet Computer Association</a> provides real-time statistics about the Internet Compouter Protocol (ICP) network. <a href="https://forum.dfinity.org/">DFINITY's Developer Forum</a> is where the engineering team of DFINITY discusses issues, bug fixes, product features with IC developers and users - this is the best place to conduct your due dilligence on DFINITY. 
                      </Text>
                      <Text className="entry-one">
                        Read up the updated IC Whitepaper here: <a href="https://dfinity.org/whitepaper.pdf">The Internet Computer for Geeks (v1.1)</a>, which was just released on Jan 27, 2022. The previous whitepaper was written and published in 2018, way before the launch of IC mainnet ("Genesis") on May 10, 2021. A lot has changed since then. It's a 45-page pdf doc and written by some of the best cryptographers and software architects in the world. 
                      </Text>
                      <Text className="entry-one">
                        <a href="https://www.reddit.com/r/dfinity/">DFINITY's channel on reddit</a> is another great place to observe how DFINTY team engages the IC community. It speaks a lot to DFINITY's ethos, vision and capabilities. In particular, <a href="https://www.reddit.com/user/diego_DFN/">Diego from DFINITY</a> wrote this excellent <a href="https://www.reddit.com/r/dfinity/comments/ozboyi/megathread_technical_amas/">MEGATHREAD: Technical AMAs</a> that points to all 9 AMAs from DFINITY's R&D team during May to Aug 2021 after Genesis. Each team in the R&D organization took turns to field questions from developers. It's a fantastic learning experience.
                      </Text>
                      <Text className="entry-one">
                        <a href="https://www.youtube.com/c/DFINITY">Youtube</a> has some very good videos on DFINITY and IC. Three series are fairly up to date and most useful. <a href="https://youtube.com/playlist?list=PLuhDt1vhGcrdoGdyf2Hy0doX9Zy1dwo-Z">Inside DFINITY by founder Dominic Williams</a> is a good start. <a href="https://youtube.com/playlist?list=PLuhDt1vhGcrez-f3I0_hvbwGZHZzkZ7Ng">Community Conversations hosted by Liz Yang</a> is a treasure island. <a href="https://youtube.com/playlist?list=PLuhDt1vhGcrfQGLWqhUo9-DFD5JaHqCh1">Coding with Kyle by Kyle Peacock</a> teaches you how to build a site on IC.
                      </Text>
                      <Text className="entry-one">
                        This Medium article <a href="https://medium.com/dfinity/dfinity-in-2021-a-year-of-developer-and-community-growth-on-the-internet-computer-2b8bd36450d8">DFINITY in 2021: A Year of Developer and Community Growth on the Internet Computer</a> rewinds 2021 and highlights key accomplishments in IC's ecosystem building. <a href="https://medium.com/dfinity/the-internet-computer-community-adopts-25-proposals-for-future-crypto-innovation-7465984c5ad1">The Internet Computer Community Adopts 25 Proposals for Future Crypto Innovation</a> indexes 25 proposals that were adopted by the IC community toward the end of 2021, each of which came with a detailed scope and technical elaboration. A technology team's capability and commitment are best validated by its ability to deliver milestones along its roadmap consistently. DFINITY has a very comprehensive and ambitious <a href="https://medium.com/dfinity/the-internet-computers-post-genesis-r-d-roadmap-dce2938adcde">post-Genesis roadmap for 2022 and beyond</a>. These three Medium articles collectively would give a full picture of ICP's past, present and future. 
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
                        5. How to Try Out ICP
                      </Text>
                      <Text className="entry-three">
                        6. How Is This Job Different?
                      </Text>
                      <Text className="entry-three">
                        7. What Kind of People Makes Good Fit?
                      </Text>
                      <Text className="entry-three">
                        8. Proof-of-Commitment
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
