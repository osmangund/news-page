import { Flex } from "./styles/Flex.styled"
import {
  StyledHeader,
  Button,
  StyledAside,
  MainArticle,
  TextSeperator,
} from "./styles/Header.styled"

import { asideArticles } from "../articleContent"
import Article from "./Article"
import PropTypes from "prop-types"
import { StyledImage } from "./styles/Image.styled"

import React from "react"

function Aside({ children }) {
  return (
    <StyledAside>
      {children}
      {asideArticles.map((item) => (
        <React.Fragment key={item.id}>
          <Article item={item} />
          <TextSeperator />
        </React.Fragment>
      ))}
    </StyledAside>
  )
}

export default function Header() {
  return (
    <StyledHeader>
      <MainArticle>
        <StyledImage src="/mainarticle.jpg" alt="" maxw="1024px" maxh="320px" />
        <Flex gap="2.2rem">
          <div>
            <h1>The Bright Future of Web 3.0?</h1>
          </div>
          <div>
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <Button>Read more</Button>
          </div>
        </Flex>
      </MainArticle>
      <Aside>
        <h1>New</h1>
      </Aside>
    </StyledHeader>
  )
}

Aside.propTypes = {
  children: PropTypes.node.isRequired,
}
