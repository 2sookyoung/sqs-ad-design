import styled from '@emotion/styled'

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: ${({ col }) => col ?? '1fr 1fr'};
  grid-template-rows: ${({ row }) => row && row};
  gap: ${({ gap }) => gap ?? '0'};
  align-items: ${({ align }) => align};

  @media (max-width: 1200px) {
  }
`
