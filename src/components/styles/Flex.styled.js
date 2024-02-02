import styled from "styled-components"

export const Flex = styled.div`
  display: flex;
  gap: ${({ gap }) => gap || "1rem"};

  & > * {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;

    img {
      margin: 0 auto;
    }
    & > * {
      flex: auto;
    }
  }
`
