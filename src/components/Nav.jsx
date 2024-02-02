import { Bars } from "../assets/icons/Bars"
import { StyledNav, Logo } from "./styles/Nav.styled"

export default function Nav() {
  return (
    <StyledNav>
      <Logo>V.</Logo>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <Bars />
      </label>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">New</a>
        </li>
        <li>
          <a href="#">Popular</a>
        </li>
        <li>
          <a href="#">Trending</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
      </ul>
    </StyledNav>
  )
}
