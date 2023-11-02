import styled from "@emotion/styled";
import {spacing} from "@/styles/variables";

const containerWidth = '1200px'

export const Container = styled.div`
  max-width: ${containerWidth};
  width: 100%;
  padding: 0 ${spacing.md};
  margin: 0 auto;
`