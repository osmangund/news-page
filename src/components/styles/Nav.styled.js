import styled from "styled-components"

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-block: 1rem;

  #check {
    display: none;
  }

  ul {
    list-style: none;

    display: flex;
    gap: 2rem;
    padding: 0;

    transition: all 0.35s ease-in-out;
    li {
      a {
        text-decoration: none;
        color: #0c0c0c;
        transition: all 0.35s ease-in-out;
        &:hover {
          letter-spacing: 5px;
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    ul {
      position: fixed;
      width: 100%;
      height: 100vh;
      top: 80px;
      left: -200%;
      margin: 0;
      padding-block: 2rem;
      background-color: #fefefe;
      text-align: center;
      flex-direction: column;

      li {
        display: block;

        a {
          font-size: 3rem;
          &:hover,
          &:active {
            letter-spacing: 10px;
          }
        }
      }
    }

    #check:checked ~ ul {
      left: 0;
      right: 0;
    }
  }
`
export const Logo = styled.div`
  font-size: 3rem;
  font-weight: 1000;
`
