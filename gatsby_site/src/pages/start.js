import React from "react"
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Navigation from "sections/Navigation"
import ArticleStartPage from "sections/Start"
import Footer from "sections/Footer"

import theme from "assets/theme/theme"
import GlobalStyle from "assets/theme"

const ArticleStart = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Cryptik Blog Details Page" />
      <Navigation />
      <ArticleStartPage />
      <Footer />
    </Layout>
  </ThemeProvider>
)
export default ArticleStart
