import AsideArticles from "./AsideArticles"
import MainArticle from "./MainArticle"
import { StyledHeader } from "./styles/Header.styled"

export default function Header() {
  return (
    <StyledHeader>
      <MainArticle />
      <AsideArticles>
        <h1>New</h1>
      </AsideArticles>
    </StyledHeader>
  )
}
