import styled from "styled-components"

export const StyledArticle = styled.article`
  background-color: ${({ bg }) => bg || "#fafafa"};
  color: ${({ theme }) => theme.colors.lightText || "#010101"};
  display: flex;
  padding-inline: 0;
  padding-block: 1rem 0.5rem;
  p {
    margin-bottom: 1rem;
    font-weight: 300;
    font-size: 1rem;
  }
  h1,
  h2,
  h3 {
    margin: 0;
  }
  cursor: pointer;
`

export const Title = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: lightgray;
`

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 150px;
  max-width: ${({ maxw }) => maxw || "100%"};
  max-height: ${({ maxh }) => maxh || "100%"};
  max-height: 250px;
  border-radius: 10px;
`

export const ArticleNumber = styled.h1`
  margin: 0.5rem 0;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.lightText};
`
