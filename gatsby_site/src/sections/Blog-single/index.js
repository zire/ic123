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
import Sidebar from "../../components/Blog-sidebar"

import BlogThumb from "assets/images/blog/post/blog-post-5.png"

import AuthorThumb2 from "assets/images/testimonial/testimonial-thumb-2.jpg"
import AuthorThumb3 from "assets/images/testimonial/testimonial-thumb-3.jpg"
import AuthorThumb4 from "assets/images/testimonial/testimonial-thumb-4.jpg"
import AuthorThumb5 from "assets/images/testimonial/testimonial-thumb-5.jpg"

import BlogPageWrapper from "./blogSingle.style"

const BlogSinglePage = () => {
  return (
    <BlogPageWrapper>
      <PageHeader title="Blog Single" />
      <Box className="single-post-wrapper">
        <Container>
          <Row>
            <Col className="xs-12 lg-8">
              <Row>
                <Col className="xs-12">
                  <Box className="single-post-block">
                    <Box className="post-thumb-block">
                      <Image src={BlogThumb} alt="cryptik blog page" />
                      <Box className="post-meta">
                        <Text as="span">
                          <Text as="em"> 15 </Text> DEC
                        </Text>
                      </Box>
                    </Box>
                    <Box className="post-content-block">
                      <Heading className="post-title">
                        Rhetoric me avoid may lowest even quite first.
                      </Heading>
                      <Text className="entry-one">
                        Coracoes costumes grandeza com observou horrivel mas.
                        Amor tive fara de dado esse em. Ve es couberam oh
                        garrafal mListheres. Dourados duzentos voz lustroso diz
                        discutir ahi. Luzindo no do tremLista na so fallava.
                        Evitava tropheu curiosa.
                      </Text>
                      <Text className="entry-two">
                        Coracoes costumes grandeza com observou horrivel mas.
                        Amor tive fara de dado esse em. Ve es couberam oh
                        garrafal mListheres. Dourados duzentos voz lustroso diz
                          discutir ahi. Luzindo no do tremLista na so fallava.
                        Evitava tropheu curiosa ou agitado os acceite si
                        assiste. Voz veio veja tez digo cres.
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/6EiUeVbP0Fg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </Text>
                      <blockquote>
                        You never change things by fighting the existing
                        reality.To change something, build a new model.
                      </blockquote>
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
                      <blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Walking with my ape in Puxi, Shanghai<a href="https://twitter.com/ApesDfinity?ref_src=twsrc%5Etfw">@ApesDfinity</a> <a href="https://twitter.com/hashtag/DSA?src=hash&amp;ref_src=twsrc%5Etfw">#DSA</a> <a href="https://twitter.com/hashtag/Ape?src=hash&amp;ref_src=twsrc%5Etfw">#Ape</a> <a href="https://t.co/RXCaTdpGLp">pic.twitter.com/RXCaTdpGLp</a></p>&mdash; herbert.icp ∞ (@herbertyang) <a href="https://twitter.com/herbertyang/status/1487599869691064324?ref_src=twsrc%5Etfw">January 30, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                    </Box>
                    <Box className="post-info-block">
                      <Box className="tags">
                        <Link to="#">#crypto</Link>
                        <Link to="#">#Landing</Link>
                        <Link to="#">#Bitcoin</Link>
                      </Box>
                      <Box className="share">
                        <Link to="#">
                          <TiSocialFacebook />
                        </Link>
                        <Link to="#">
                          <TiSocialTwitter />
                        </Link>
                        <Link to="#">
                          <TiSocialPinterest />
                        </Link>
                        <Link to="#">
                          <TiSocialLinkedin />
                        </Link>
                      </Box>
                    </Box>

                    <Box className="post-comment-wrapper">
                      <Heading as="h2" className="block-title">
                        5 Comments
                      </Heading>
                      <List>
                        <ListItem>
                          <Box className="post-comment-block">
                            <Box className="author-avatar">
                              <Image
                                src={AuthorThumb2}
                                alt="cryptik comments author"
                              />
                            </Box>
                            <Box className="comment-body">
                              <Box className="comment-body-inner">
                                <Heading as="h3">
                                  Amrita<Text as="span">Dec, 05, 2020</Text>
                                </Heading>
                                <Box className="replay">
                                  <Link to="#">
                                    {" "}
                                    Replay <IoIosArrowRoundForward />
                                  </Link>
                                </Box>
                              </Box>
                              <Box className="comment-content">
                                <Text>
                                  Finalmente vol sol justamente crematorio vil
                                  nos. Bem com sido esse case alem aos.Amor tive
                                  fara de dado esse em.
                                </Text>
                              </Box>
                            </Box>
                          </Box>
                          <List>
                            <ListItem>
                              <Box className="post-comment-block">
                                <Box className="author-avatar">
                                  <Image
                                    src={AuthorThumb3}
                                    alt="cryptik comments author"
                                  />
                                </Box>
                                <Box className="comment-body">
                                  <Box className="comment-body-inner">
                                    <Heading as="h3">
                                      {" "}
                                      jacqueline{" "}
                                      <Text as="span">Dec, 05, 2020</Text>{" "}
                                    </Heading>
                                    <Box className="replay">
                                      <Link to="#">
                                        {" "}
                                        Replay <IoIosArrowRoundForward />
                                      </Link>
                                    </Box>
                                  </Box>
                                  <Box className="comment-content">
                                    <Text>
                                      Finalmente vol sol justamente crematorio
                                      vil nos. Bem com sido esse case alem
                                      aos.Amor tive fara de dado esse em.
                                    </Text>
                                  </Box>
                                </Box>
                              </Box>
                            </ListItem>
                            <ListItem>
                              <Box className="post-comment-block">
                                <Box className="author-avatar">
                                  <Image
                                    src={AuthorThumb4}
                                    alt="cryptik comments author"
                                  />
                                </Box>
                                <Box className="comment-body">
                                  <Box className="comment-body-inner">
                                    <Heading as="h3">
                                      {" "}
                                      Jennifer{" "}
                                      <Text as="span">Dec, 05, 2020</Text>{" "}
                                    </Heading>
                                    <Box className="replay">
                                      <Link to="#">
                                        {" "}
                                        Replay <IoIosArrowRoundForward />
                                      </Link>
                                    </Box>
                                  </Box>
                                  <Box className="comment-content">
                                    <Text>
                                      Finalmente vol sol justamente crematorio
                                      vil nos. Bem com sido esse case alem
                                      aos.Amor tive fara de dado esse em.
                                    </Text>
                                  </Box>
                                </Box>
                              </Box>
                            </ListItem>
                          </List>
                        </ListItem>
                        <ListItem>
                          <Box className="post-comment-block">
                            <Box className="author-avatar">
                              <Image
                                src={AuthorThumb5}
                                alt="cryptik comments author"
                              />
                            </Box>
                            <Box className="comment-body">
                              <Box className="comment-body-inner">
                                <Heading as="h3">
                                  {" "}
                                  William <Text as="span">
                                    Aug, 05, 2020
                                  </Text>{" "}
                                </Heading>
                                <Box className="replay">
                                  <Link to="#">
                                    {" "}
                                    Replay <IoIosArrowRoundForward />
                                  </Link>
                                </Box>
                              </Box>
                              <Box className="comment-content">
                                <Text>
                                  Finalmente vol sol justamente crematorio vil
                                  nos. Bem com sido esse case alem aos.Amor tive
                                  fara de dado esse em.
                                </Text>
                              </Box>
                            </Box>
                          </Box>
                        </ListItem>
                      </List>
                    </Box>
                    <Box className="comment-box-wrapper">
                      <Heading as="h2" className="block-title">
                        Leave a Comment
                      </Heading>
                      <Text>
                        Sing in to post your comment or singup if you dont have
                        any account.
                      </Text>
                      <form>
                        <Box className="form-inline">
                          <input type="text" placeholder="Name*" />
                          <input type="email" placeholder="Email*" />
                        </Box>
                        <Box className="form-group">
                          <input type="text" placeholder="Website(Optional)" />
                        </Box>
                        <textarea
                          rows="10"
                          cols="50"
                          placeholder="Comment"
                        ></textarea>
                        <Button>Post Comment</Button>
                      </form>
                    </Box>
                  </Box>
                </Col>
              </Row>
            </Col>
            <Col className="sm-12 lg-4">
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </Box>
    </BlogPageWrapper>
  )
}

export default BlogSinglePage
