import styled from "styled-components"

export const StyledHeader = styled.header`
  background-color: #fafafa;
  display: flex;
  gap: 3rem;
  p {
    font-size: 1.2rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
    gap: 5rem;
  }
`

export const StyledMainArticle = styled.article`
  h1 {
    font-size: 3.5rem;
    font-weight: 1000;
    margin: 0;

    padding: 0.5rem;
  }
  p {
    margin-bottom: 3rem;
  }
`

export const Button = styled.button`
  background-color: #df6758;
  border: 0;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: bold;
  color: white;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 150ms ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.goldText};
    color: black;
  }
`

export const StyledAside = styled.aside`
  background-color: #000018;
  padding: 1.5rem 1.5rem 0 1.5rem;

  h1 {
    font-size: 3rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.goldText};
  }
`

export const TextSeperator = styled.div`
  border-bottom: 1px solid #babbcc;
  align-self: center;
`
