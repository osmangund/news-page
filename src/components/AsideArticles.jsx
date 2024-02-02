import { StyledAside, TextSeperator } from "./styles/Header.styled"
import { asideArticles } from "../articleContent"
import Article from "./Article"
import React from "react"
import PropTypes from "prop-types"

export default function AsideArticles({ children }) {
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

AsideArticles.propTypes = {
  children: PropTypes.node,
}
