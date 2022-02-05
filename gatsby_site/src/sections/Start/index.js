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
                        So, you're new to crypto but have heard about IC or DFINITY from some friends. You're curious to find out more and may be even interested in joining the DFINITY team or contributing to the IC community. How do you learn more about this industry, the DFINITY team and the Internet Computer?
                      </Text>
                      <Text className="entry-one">
                        Here's a guide that can help you get started to grasp some basic concepts and get your hands dirty in this exciting world of Web3, metaverse, blockchain and some of the most advanced Internet technology innovations.
                      </Text>
                      <Text className="entry-one">
                        TL'DR
                      </Text>
                      <Text className="entry-three">
                        1. Challenges of Learning Blockchain
                      </Text>
                      <Text className="entry-one">
                        We shall reckon the challenges ahead before the deep-dive. Learning about blockchain/crypto is not easy. Everyone is talking about it. Every media is tossing around buzzwords like Web3, metaverse as if the future has already arrived and you're going to miss the train. Everyone seems to have strong opinion about it with very divided views. People from different blockchain camps diss each other and everyone thinks she is the prom queen.
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
                        4. Where To Start Researching on DFINITY and ICP
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
                        This Medium article <a href="https://medium.com/dfinity/dfinity-in-2021-a-year-of-developer-and-community-growth-on-the-internet-computer-2b8bd36450d8">DFINITY in 2021: A Year of Developer and Community Growth on the Internet Computer</a> rewinds 2021 and highlights key accomplishments in IC's ecosystem building. Another Medium article <a href="https://medium.com/dfinity/the-internet-computer-community-adopts-25-proposals-for-future-crypto-innovation-7465984c5ad1">The Internet Computer Community Adopts 25 Proposals for Future Crypto Innovation</a> indexes 25 proposals that were adopted by the IC community toward the end of 2021, each of which came with a detailed scope and technical elaboration. A technology team's capability and commitment are best validated by its ability to deliver milestones along its roadmap consistently. DFINITY has a very comprehensive and ambitious <a href="https://medium.com/dfinity/the-internet-computers-post-genesis-r-d-roadmap-dce2938adcde">post-Genesis roadmap for 2022 and beyond</a>. These three Medium articles collectively would give a full picture of ICP's past, present and future. 
                      </Text>
                      <Text className="entry-one">
                        <a href="https://dfinity.org/showcase">DFINITY Showcase</a> highlights notable projects in the ecosystem of the Internet Computer. Explore true Web3 dApps in NFT, Social, Games, Metaverse, DeFi, Infrastructure, Enterprise and Productivity. Try them out yourself before drawing conclusion on what blockchain can or cannot do, or publish your "first impression on Web3" article.
                      </Text>
                      <Text className="entry-one">
                        Besides the above sites/articles from the DFINITY team, my own <a href="https://twitter.com/herbertyang">Twitter ID @herbertyang</a> is a good spot to keep track of the latest happening and growth of DFINITY and IC ecosystem in Asia. <a href="https://twitter.com/herbertyang/status/1457848063041556485">My pinned tweet</a> is a thread of threads that chronicle all the major events by DFINITY team or key players in the IC community. If someone would like to conduct a due dilligence background check on DFINITY/IC, want to know our key activities since Genesis, find out which are the rising star projects that have the potential of becoming the next Web3 unicorn, or which crypto investors we like to partner with, this digital garden of forking paths has all the answers. 
                      </Text>
                      <Text className="entry-one">
                        At time of writing this article, we don't run any social media site/group on Wechat or Weibo. If you see something in Chinese that labels itself with prefix of "DFINITY", "Dfinity", "IC", or "ICP", keep in mind that they are <b>NOT</b> managed by the DFINITY team, but by independent third-party community members. Some of them have excellent contents that complement our official social media/site very well; some of them are done with poor taste that makes us cringe, if not want to send them a cease and desist letter right away. Don't place your blind trust in someone simply because they claim to be the "official" channel of DFINITY. There is a lot of a misinformation and disinformation on Wechat and Weibo. 
                      </Text>
                      <Text className="entry-three">
                        5. How to Try Out ICP
                      </Text>
                      <Text className="entry-one">
                        If you're a developer, start out with <a href="https://smartcontracts.org/">smartcontracts.org</a> to download the IC SDK and go from there. 
                      </Text>
                      <Text className="entry-one">
                        If you're not a developer but an Internet user or investor, you can start your ICP journey with this onboarding flow:
                        <ol>
                          <li>Register an Internet Identity anchor/account at <a href="https://identity.ic0.app/">identity.ic0.app</a>, which is created and managed by DFINITY. This is your passport to authenticate your identity in all the ICP dApps. You can do this on your iPhone or Windows phone. It's free to register an Internet Identity ("II") anchor/account. You can register as many II accounts as you like.</li>
                          <li>Login to your <a href="https://nns.ic0.app/v2/">NNS (Network Nervous System) account</a>. NNS site is also created and managed by DFINITY. It's the official (hot) wallet that can manage your ICP token, transfer ICP, stake ICP, participate in the NNS governance (NNS is a DAO), and manage your canisters (in similar fashion as you would manage your AWS dashboard). Get the <b>Principal ID</b> from your NNS account. This is the wallet address that can be shared publicly for you to receive ICP token. Login to NNS requires authentication by Internet Identity ("II").</li>
                          <li>Get some ICP tokens via means that are available to you in a manner that's allowed in your local country. Once the ICP tokens are in the custodian wallet of your exchange account, transfer them to your own wallet, which is identified by the Principal ID in Step 2.</li>
                          <li>Return to your NNS dashboard. You shall see the balance of your account has increased. The transfer is almost instantaneous within 1-2 seconds. No need to pay any gas fee other than the transaction fee charged by your exchange platform.</li>
                          <li>You can do many things with NNS wallet, but not for buying NFT. You need a third-party wallet for NFT. Two wallets are most popular for ICP holders, <a href="https://twitter.com/plug_wallet">Plug</a> and <a href="https://twitter.com/StoicWalletApp">Stoic</a>. They are developed not by DFINITY but independent IC developers. Sign up both of them and transfer some ICP tokens to your new wallets.</li>
                          <li>Explore some NFTs at <a href="https://twitter.com/EntrepotApp">Entrepot</a>, the largest NFT marketplace for IC, sort of Opensea for Ethereum. Buying NFT on IC is instantaneous and you pay NO gas fee. IC uses "reverse gas model" that would give you the same use experience as traditional Internet, where developer bears the cost of up-keeping a site and users pay no extra transaction fee like the gas fee in the Ethereum ecosystem.</li>
                          <li>Explore a few SocialFi dApps in true Web3 fashion, <a href="https://twitter.com/DscvrO">DSCVR</a> (reddit on IC), <a href="https://twitter.com/DistriktApp">distrikt</a> (Linkedin/Twitter on IC) and <a href="https://twitter.com/OpenChat">OpenChat</a> (WhatsAp/Wechat on IC)</li>                     
                        </ol>
                      </Text>
                      <Text className="entry-three">
                        6. What Kind of People Makes Good Fit for DFINITY?
                      </Text>
                      <Text className="entry-one">
                        If you're interested in joining DFINITY, read on. If not, just skip this and go to the next section.
                      </Text>
                      <Text className="entry-one">
                        First and foremost, you need to have a <b>passion for technology</b> and how it will change people's lives. Without this passion, you're just doing a job by taking orders like a bot. Many people work in technology but only a small cohort of people actually think about it, talk about, write about it and act on it, 24/7, non-stop. If you're a technology enthusiast, you will have a reputation by now and you know it. 
                      </Text>
                      <Text className="entry-one">
                        Second, you need to have strong <b>intellectual curiosity</b> with an insatiable desire to keep learning and strong ability to pick up new stuff. In crypto, nobody is an expert and everybody is learning, all the time. The technology evolves so rapidly that the only sustainable competitive advantangein the long-run for an individual or a team is how quickly it can filter the right information, unlearn what's no longer relevant, and acquire new knowledge framework and skills. 
                      </Text>
                      <Text className="entry-one">
                        Third, you need to have a strong belief in <b>decentralization</b> and how it will transform the society for better. The core spirit of the original cypherpunk sub-culture and present blockchain industry is about establishing trust efficiently and effectively in an increasingly decentralized world from a technological perspective. At least to me, this is agnostic to religion belief or political systems. If you can't pass this, you will have a hard time appreciating the power and beauty of blockchain, let alone Web3.
                      </Text>
                      <Text className="entry-one">
                        Forth, you need to have a <b>high level of conviction</b>. Others could give you the spark or plant some seeds, but this conviction has to be developed organically and internally from within. Debates among various L1 blockchains sometimes sound like religious wars. In traditional industries, you rarely see this and can sleep with the comfort knowing that most industries have a legitimate reason to exist and persist. In crypto, the rise of one L1 blockchain may very well signal the demise of ALL other L1 blockchains. A lot of capital is at stake. You have to constantly challenge yourself, am I living in my own echo chamber, or is my believed network going to prevail and prosper? If you think you've got the answer, think harder. 
                      </Text>
                      <Text className="entry-one">
                        Fifth, you're a <b>contrarian</b>, not a conventionalist. If your first question to a startup founder is, what if Tencent, Alibaba, ByteDance, or Facebook launches the same product as your startup, then you might as well stay in the Big Tech and carry on with your life. Not saying you're beyond the point of salvation, but it will consume too much effort on both sides to turn you around. 
                      </Text>
                      <Text className="entry-three">
                        7. Proof-of-Commitment
                      </Text>
                      <Text className="entry-one">
                        Since the entire blockchain industry was created to solve the problem of trust, let's game on, carry forward that spirit and be more tactical about how we can get to know each other more. 
                      </Text>
                      <Text className="entry-one">
                        Creating a rapid <b>feedback loop</b> is a good first step. In traditional industry, a complete feedback loop between vendor and customer or between business partners is often a long and winding road. In crypto, everything, the good, the bad and the ugly, is on Twitter. You don't have to be a Twitter aficionado to signal to people what you like, what you support and what you want. There are other ways to signal of course, but Twitter is the fastest way and the least that anyone can do.
                      </Text>
                      <Text className="entry-one">
                        Please refer more developers to apply for DFINITY's <b><a href="https://dfinity.org/grants">Developer Grants Program</a></b>. As a non-profit foundation headquartered in Zurich, Switzerland, we don't do revenue. We exist to promote the technology of the Internet Computer Protocol and work hard to drive mass adoption toward 35 million developers in the world (about 7 million in China alone). Whatever we do by the end of the day, is to attract more developers to use the SDK of ICP to build their next Web3 decentralized app. Many people come to me and offer gesture of collaboration. This is my answer. This is the only thing we care. Other things are just work-in-process or building blocks leading to this.
                      </Text>
                      <Text className="entry-one">
                        Make <b>warm-intro</b> for us. ICP doesn't aspire to create a better version of Bitcoin or Ethereum or AWS, it aims to reinvent the entire Internet as we know it. We need to reach out to a very broad spectrum of constituencies and audiences. I'll be hard pressed to think of any segment that would be largely insulated from the future expansion of ICP. We can always use a warm-intro to cultivate a new relationship that could help us penetrate into a new community or strike a partnership.
                      </Text>
                      <Text className="entry-one">
                        Last but not the least, you can also apply to DFINITY's <b><a href="https://dfinity.org/community/">Community Awards Program</a></b> to leverage your resources and contribute to the growth of the ICP ecosystem. You don't have to be a programmer or know a line of code. You can be an artist, a community volunteer, a translation expert, an event ninja, a BD veteran, or just about any role in any capacity, small or large, public or private. You can do your day job at Company XYZ, and moon-light for IC and receive grant awards. This Medium article by <a href="https://twitter.com/TheMikeHunte">Mike Hunte</a> of DFINITY shares helpful <a href="https://medium.com/dfinity/tips-for-writing-the-best-community-awards-program-grant-application-950d84c7771d">Tips on Writing the Best Community Awards Program Grant Application</a>. 
                      </Text>
                      <Text className="entry-three">
                        8. Thank You
                      </Text>
                      <Text className="entry-one">
                        It's a long read but hopefully a solid rope to help you get started. This website is deployed 100% on ICP. Its front-end is built in a Gatsby framework based on React/Javascript. The site is compiled into a Web Assembly binary file as a smart contract. The smart contract is deployed to a canister `js6yw-cyaaa-aaaag-aaa5q-cai` on one of the 30+ subnets that are connected by Chain Key Cryptography to form an ever-expanding blockchain network that provides the storage and computing power to keep this site on. Since this is a simple single page site with static contents whose states will not be modified by readers (you), it has only Query call, no Update call. Query call is currently not charged by the node providers (independent third-party data centers) for ICP, so my cost of maintaining this site is only for storage of the deployment files, which is about 11.5MB. Storage cost on ICP is about $5 for 1GB per year at present. So my cost of upkeeping this site is about $0.06/year. ICP is the first and so far the only blockchain protocol in the world that can host the front-end of a web application (so that users like you can interact with the smart contract behind), enable smart contract (this site or web application is essentially a smart contract) and provide distributed storage and compute power. This, is the future of Web3. 
                      </Text>
                      <Text className="entry-one">
                        Don't panic.
                      </Text>
                      <Text className="entry-one">
                        <b><a href="https://js6yw-cyaaa-aaaag-aaa5q-cai.ic0.app/start/index.html">https://js6yw-cyaaa-aaaag-aaa5q-cai.ic0.app/start/index.html</a></b>
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
