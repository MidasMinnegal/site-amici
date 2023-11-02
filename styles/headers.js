import {fonts, spacing} from "@/styles/variables";
import {css} from "@emotion/react";
import styled from "@emotion/styled";

export const h1Style = css`  
  margin: 0;
  font-family: ${fonts.header};
  font-size: 4rem;
  font-weight: 700;`

export const H1 = styled.h1`
  ${h1Style}
`

export const h2Style = css`
  font-family:  ${fonts.header};
  margin: 0 0 ${spacing.sm} 0;
  font-size: 2.5rem;
  font-weight: 600;
  `

export const H2 = styled.h2`
  ${h2Style}
`

export const h3Style = css`
  margin: 0;
  font-family:  ${fonts.header};
  font-size: 2.5rem;
  font-weight: 700;
`

export const H3 = styled.h3`
  ${h3Style}
`