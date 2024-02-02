import styled from "styled-components"

const StyledFooter = styled.footer`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 2rem;
  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
    font-size: 0.8rem;
  }
  span {
    font-weight: 700;
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <a
        href="https://linkedin.com/in/osmangund"
        target="_blank"
        rel="noreferrer"
      >
        <span>osmangund®</span> 2024. All rights reserved.
      </a>
    </StyledFooter>
  )
}
