<script>
  import Config from "$lib/SveltePress/sveltePress.config";
  import { Button, Tile, Grid, Row, Column } from "carbon-components-svelte";
  import ArrowDown32 from "carbon-icons-svelte/lib/ArrowDown32";

  import { session } from "$app/stores";

  $: nav = Config.nav.overwrite
    ? Config.nav.items || []
    : $session.get("navbar").concat(Config.nav.items || []);

  let currentYear = new Date().getFullYear();

  const breakpoints = {
    sm: 8,
  };


    var myPix = new Array("/motoko1.png","/motoko2.png","/motoko3.png","/motoko4.png","/motoko5.png");
    var randomNum = Math.floor((Math.random() * myPix.length));
    let img_motoko = myPix[randomNum];



</script>

<svelte:head>
  <meta name="og:title" content={Config.title} />
  <title>{Config.title}</title>
</svelte:head>

<div class="main">
  <div class="banner">
    <Grid>
      <h2 class="banner-h2 ">
        <span>DFINITY</span
        >官方团队带你学习互联网计算机,成为Web3时代最新潮的开发者
      </h2>
      <img class="motoko" id="moto" src={img_motoko} alt="motoko" />
    </Grid>
  </div>
  <div class="sp--header">
    <Grid padding condensed>
      <Row >
        <Column>
          <h4 class="bx-title-0">
            互联网计算机（Internet
            Computer）是一个去中心化的云计算平台，利用颠覆性的链钥密码学技术将全世界独立的数据中心以子网的方式链接成一个可以无限扩容的虚拟主机。网络应用以智能合约的形式被封存在子网上的容器里，通过数据中心的服务器获得带宽，存储空间和算力。IC是目前唯一可以运行网络前端而且100%部署在链上的区块链平台，在以太坊为首的资产型区块链以外，开创了一种全新范式
            - 通用型区块链，解锁了重构互联网的无限可能。
          </h4>
        </Column>
      </Row>
      <Row>
        <Column>
          <h2 class="title-why">为什么选择互联网计算机</h2>
        </Column>
      </Row>
      <Row class="sp--feature" >
        <Column  md sm={breakpoints.sm}>
          <h4 class="bx-title-1">
            直接在区块链上部署网络应用前端，远低于云计算架构的开发成本
          </h4>
        </Column>
        <Column  md sm={breakpoints.sm}>
          <h4 class="bx-title-2">
            互联网开发经验无缝迁移，真正的Web3一体化平台，一天内快速开发区块链app
          </h4>
        </Column>
      </Row>
      <Row class="sp--feature" >
        <Column md sm={breakpoints.sm}>
          <h4 class="bx-title-3">
            使用场景涵盖互联网行业所有垂直领域 -
            金融，游戏，NFT，社交，工具，科研，企业服务
          </h4>
        </Column>
        <Column md sm={breakpoints.sm}>
          <h4 class="bx-title-4">
            加入顶级海外公链的早期生态，学习欧美一流的区块链全栈技术，成为Web3时代的独角兽CTO
          </h4>
        </Column>
      </Row>
      <Row class="sp--arrow--down">
        <ArrowDown32 />
      </Row>
    </Grid>

    <Grid padding class="sp--grid sp--features">
      <div class="tile2">
        <Row class="sp--feature" style="flex-wrap: wrap-reverse;">
          <Column md sm={12}>
            <h2 class="hh2">IC开发新手入门</h2>
            <h4 class="hh4">
              跟随DFINITY元老级工程师Paul Liu学习如何用Motoko语言开发IC应用
            </h4>
            <a class="course-btn" href="/developcenter/courses/dfinity_official_course">开始编程</a>
          </Column>
          <Column md sm={12}>
            <a href="/developcenter/courses/dfinity_official_course">
              <img src="/lesson.png" alt="" />
            </a>
          </Column>
        </Row>
      </div>
      <div class="tile1">
        <Row class="sp--feature" >
         
          <Column class="sp--feature--card" md sm={12}>
            <a href="/supernova">
              <img
                src="/Supernova/supernovaopen.jpg"
                alt=""
              />
            </a>
          </Column>
          <Column md sm={12}>
            <h2 class="hh2">Supernova</h2>
            <h4 class="hh5">2022年5月10日 - 2022年6月20日</h4>
            <h4 class="hh4">
              DFINITY举办的首届全球黑客松 - Supernova，
              吸引了3千多名开发者角逐高达600万美元的奖金池
            </h4>
            <a class="course-btn" href="/supernova">如何参赛</a>
          </Column>
        </Row>
      </div>
    </Grid>
  </div>

  <footer>
    <img src="/100_on_chain-slim-bg_dark.svg" alt="" />
  </footer>
</div>

<style lang="scss">
  :global(.sp--arrow--down) {
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 3rem 0;
    color: #fff;
  }

  :global(.sp--header) {
    margin-top: 2em;
    min-height: 100vh;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
  }

  :global(.sp--grid) {
    margin-bottom: 1rem !important;
  }

  :global(.sp--features) {
    height: 100%;
    width: 100%;
    :global(.sp--feature) {
      align-items: center;
      text-align: center;
      // justify-content: center;

      :global(.sp--feature--card) {
        text-align: left;
      }
      img {
        max-width: 100%;
      }
    }
  }

  :global(.sp--tile) {
    height: 100%;
    background-color: #212131;
  }

  .main {
    padding-top: 3rem;
  }

  footer {
    font-weight: bold;
    text-align: center;
    padding: 0 2rem 2rem;
  }
  footer > img {
    display: block;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  /* md */
  @media only screen and (min-width: 673px) {
    :global(.sp--grid) {
      margin-bottom: 5rem;
    }
  }

  .banner {
    overflow: hidden;
    display: flex;
    position: relative;
    width: 100%;
    height: 35rem;
    top: 0;
    left: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("/bg.jpg");
  }

  .banner-h2 {
    position: absolute;
    font-size: 2rem;
    text-align: center;
    left: 0;
    width: 20rem;
    color: #e1edff;
    margin-top: 20rem;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-right: 2rem;
  }
  .banner-h2 > span {
    font-weight: bold;
  }
  .motoko {
    display: block;
    position: absolute;
    left: -6.5rem;
    top: -8rem;
    transform: scale(40%);
  }
  @media (min-width: 673px) {
    .banner-h2 {
      position: absolute;

      font-size: 3rem;
      text-align: center; 
      left: 0;
      width: 38rem;
      color: #e1edff;
      margin-top: 12rem;
      margin-left: 50%;
      transform: translateX(-34rem);
      margin-right: 2rem;
    }
    .motoko {
      display: block;
      position: absolute;
      margin-left: 50%;
      margin-right: 2rem;
      left: -2rem;
      top: -1rem;
      transform: scale(55%);
    }
  }
  .bx-title-0 {
    display: block;
    text-align: left;
    padding: 2rem;
    background-color: #363e49;
    color: aliceblue;
    margin: 0.5rem;
    border-radius: 8px;
  }

  .bx-title-1 {
    display: block;
    height: 162px;
    text-align: center;
    padding: 3.7rem 2vh 6rem 2rem;
    background-color: rgba(237, 30, 121, 0.8);
    color: aliceblue;
    margin: 0.5rem;
    border-radius: 8px;
  }
  .bx-title-2 {
    display: block;
    height: 162px;
    text-align: center;
    padding: 3.5rem 3rem 6rem 3rem;
    background-color: #29abe2;
    color: aliceblue;
    margin: 0.5rem;
    border-radius: 8px;
  }
  .bx-title-3 {
    display: block;
    height: 162px;
    text-align: center;
    padding: 3rem 3rem 6rem 3rem;
    background-color: #522785;
    color: aliceblue;
    margin: 0.5rem;
    border-radius: 8px;
  }
  .bx-title-4 {
    display: block;
    height: 162px;
    text-align: center;
    padding: 3rem 3rem 6rem 3rem;
    background-color: rgba(241, 90, 36, 0.8);
    color: aliceblue;
    margin: 0.5rem;
    border-radius: 8px;
  }

  .tile1 {
    margin-top: 1rem;
    background-color: #212131;
    padding-right: 1rem;
    padding-left: 1rem;
    border-radius: 8px;
  }
  .hh2 {
    color: #e1edff;
  }
  .hh4 {
    padding: 1rem 1.5rem 1rem 1.5rem;
    color: #e1edff;
  }
  .hh5 {
    color: #e1edff;
    font-size: medium;
  }
  .tile2 {
    background-color: #2d3332;
    padding-right: 1rem;
    padding-left: 1rem;
    border-radius: 8px;
  }
  .title-why {
    margin-top: 2rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
    font-size: 2rem;
    text-align: center;
    color: #e1edff;
  }
  .main {
    background-color: #222222;
  }
  .course-btn:link,
  .course-btn:visited {
    display: inline-block;
    height: 43.58px;
    width: 88px;
    font-size: 18 px;
    font-weight: bold;
    background-color: #ff7324;
    text-align: center;
    padding-top: 8px;
    color: #333333;
    text-decoration: none;
    border-radius: 3px;
    left: center;
  }
  .course-btn:hover {
    box-shadow: 0 0 5px #e1edff;
  }
</style>
