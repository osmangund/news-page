import styled from "styled-components"
export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: ${({ maxw }) => maxw || "100%"};
  max-height: ${({ maxh }) => maxh || "100%"};

  &:hover {
    filter: brightness(80%);
  }
`
