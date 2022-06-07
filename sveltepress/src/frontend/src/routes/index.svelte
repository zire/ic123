<script>
  import Config from "$lib/SveltePress/sveltePress.config";
  import { Button, Tile, Grid, Row, Column } from "carbon-components-svelte";
  import ArrowDown32 from "carbon-icons-svelte/lib/ArrowDown32";

  import { session } from "$app/stores";

  $: nav = Config.nav.overwrite
    ? Config.nav.items || []
    : $session.get("navbar").concat(Config.nav.items || []);

  let currentYear = new Date().getFullYear();

  // Might be used for more in the future
  const breakpoints = {
    sm: 8,
  };
</script>

<svelte:head>
  <meta name="og:title" content={Config.title} />
  <title>{Config.title}</title>
</svelte:head>

<div class="main">
  <div class="banner">
    <Grid padding condensed>
      <h2 class="banner-h2 ">Supernova</h2>
      <h4 class="banner-h4">从2020年5月10日到2020年6月20日</h4>
      <h4 class="banner-h4">互联网计算机的首届全球黑客马拉松</h4>
      <h4 class="banner-h4">
        总奖金和额外资助高达 600 万美元，包括指定的赛道奖励和开发者资助
      </h4>
      <a class="reg-btn" href="https://supernova.devpost.com/">点击报名</a>
      <a class="md-btn" href="/supernova">了解Supernova更多信息</a>
    </Grid>
  </div>
  <div class="sp--header">
    <Grid padding condensed>
      <Row class="sp--header--tiles">
        <Column md sm={breakpoints.sm}>
          <Tile class="sp--tile">
            <h2 class="tile--title">去中心化的web3时代</h2>
            <h4>
              ICP是目前唯一可以在链上直接运行dapp的区块链，dapp完全去中心化运作。
            </h4>
          </Tile>
        </Column>
        <Column md sm={breakpoints.sm}>
          <Tile class="sp--tile"
            ><h2 class="tile--title">低廉的资费</h2>
            <h4>
              相较于传统中心化网络服务提供商，ICP的资费更低廉，存储1G/年的资费约为5美金。
            </h4></Tile
          >
        </Column>
        <Column md sm={breakpoints.sm}>
          <Tile class="sp--tile"
            ><h2 class="tile--title">开放的共同治理环境</h2>
            <h4>
              神经元投票系统，能够管理所有 Internet Computer
              的子网和整个系统，包括节点运行的代码，版本升级，创建新子网，接入新节点等等。
            </h4></Tile
          >
        </Column>
      </Row>
      <Row class="sp--arrow--down">
        <ArrowDown32 />
      </Row>
    </Grid>
    <Grid padding class="sp--grid sp--features">
      <Row class="sp--feature" style="flex-wrap: wrap-reverse;">
        <Column class="sp--feature--card" md sm={12}
          ><Tile class="sp--tile"
            ><h2 class="tile--title">如何开始Coding</h2>
            <h4>
              ICP开发课程第一期，已全部完成。由Dfinity核心技术工程师，Paul
              Liu亲自主讲。
            </h4>
            <a class="knowmore" href="/courses">学习完整课程</a>
          </Tile>
        </Column>
        <Column md sm={12}>
          <img
            src="/lesson.png"
            alt="the cakepop official theme in front of the carbon one"
          />
        </Column>
      </Row>
      <Row class="sp--feature" style="flex-wrap: wrap-reverse;">
        <Column md sm={12}>
          <img
            src="/Supernova/supernovaopen.jpg"
            alt="the cakepop official theme in front of the carbon one"
          />
        </Column>
        <Column class="sp--feature--card" md sm={12}
          ><Tile class="sp--tile"
            ><h2 class="tile--title">Supernova</h2>
            <h4 class="banner-h4">从2020年5月10日到2020年6月20日</h4>
            <h4>
              互联网计算机的首届全球黑客马拉松,总奖金和额外资助高达 600
              万美元，包括指定的赛道奖励和开发者资助.
            </h4>
            <a class="knowmore" href="/supernova">了解更多</a>
          </Tile>
        </Column>

      </Row>
    </Grid>
  </div>

  <footer>
    <span class="pd" /> 2021{currentYear === 2021 ? "" : " - " + currentYear} -
    <a class="sp--link" href="https://t.me/+VdtEpjp34AQ2OWJl">IC开发者官方社区(ICDC)</a>
  </footer>
</div>

<style lang="scss">
  :global(.sp--arrow--down) {
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 3rem 0;
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
  }

  .pd {
    display: inline-flex;
    width: 18px;
    height: 18px;
    vertical-align: middle;
    text-align: center;
    // justify-content: center;
  }

  .pd::after {
    content: "🚫";
    display: block;
    position: absolute;
    font-size: 100%;
  }
  .pd::before {
    content: "\00a9";
    display: block;
    position: absolute;
    font-size: 100%;
  }

  .sp--link {
    color: var(--cds-interactive-01);
    text-decoration: none;
  }
  .main {
    padding-top: 3rem;
  }

  .tile--title {
    margin-bottom: 1rem;
  }

  footer {
    font-weight: bold;
    text-align: center;
    padding: 0 2rem 2rem;
  }

  /* md */
  @media only screen and (min-width: 673px) {
    :global(.sp--grid) {
      margin-bottom: 5rem;
    }

    // .subTitle {
    // 	flex-direction: row;
    // 	justify-content: center;
    // }
  }

  .banner {
    overflow: hidden;
    display: block;
    position: relative;
    width: 100%;
    height: 45vh;
    top: 0;
    left: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("/banner_bg.png");
  }

  .banner-h2 {
    font-size: 80px;
    display: block;
    color: #e1edff;
    margin-top: 2.5rem;
  }
  .banner-h4 {
    display: block;
    color: #e1edff;
    margin-top: 0.5em;
  }
  .reg-btn:link,
  .reg-btn:visited {
    display: block;
    margin-top: 0.5em;
    height: 55px;
    width: 180px;
    font-size: 24px;
    background-color: #e1edff;
    text-align: center;
    padding-top: 5px;
    color: black;
    text-decoration: none;
    border-radius: 3px;
  }
  .reg-btn:hover {
    box-shadow: 0 0 10px #e1edff;
  }
  .md-btn,
  .md-btn:visited {
    display: block;
    color: #e1edff;
    margin-top: 1em;
    font-size: 18px;
  }
  .md-btn:hover {
    text-shadow: 0 0 10px #e1edff, 0 0 20px #e1edff, 0 0 30px #e1edff;
  }
  .knowmore {
    color: #e1edff;
  }
</style>
