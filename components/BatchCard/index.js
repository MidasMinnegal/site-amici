import React from 'react'
import styled from "@emotion/styled";
import {boxShadow, breakPoint, colors, spacing} from "@/styles/variables";
import Image from "next/image";
import {extractImageProps} from "@/utils/extractImageProps";

export const batchCardWidth = '400px'

const Wrapper = styled.div`
  max-width: ${batchCardWidth};
  width: 100%;
  background-color: ${colors.white};
  transform: translateY(calc(-${spacing.xl} - ${spacing.lg}));
  box-shadow: ${boxShadow.lg};
  border-radius: ${spacing.sm};
  overflow: hidden;

  @media (max-width: ${breakPoint.mobile}) {
    transform: translateY(0);
    margin-bottom: ${spacing.lg};
  }
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  background-color: ${colors.white};;
`

const ProfileImage = styled(Image)`
  object-fit: cover;
`

const UpperContent = styled.div`
  background-color: ${colors.primary};
  padding: ${spacing.md};
  color: ${colors.white};
  width: 100%;
`

const Name = styled.h3`
  font-size: 1.75rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: ${spacing.md};
`

const Star = styled.span`
  margin-right: ${spacing.sm};
  
  &:last-of-type {
    margin-right: 0;  
  }
`

const Label = styled.span`
  margin-right: ${spacing.sm};
  margin-right: ${spacing.sm};
  opacity: .5;
`

const LowerContent = styled.div`
  padding: ${spacing.md};
  background-color: ${colors.greyLight}
`

const StatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${spacing.sm} 0;
`

const BatchCard = ({bio, cheer, name, image, number, rating}) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <ProfileImage {...extractImageProps(image)} layout="fill"/>
      </ImageWrapper>
      <UpperContent>
        <Name>{name}</Name>
        <StatWrapper>
        <Label>Lichting rating</Label>
          <div>{Array.from({length: rating}).map((nothing, index) => <Star key={index}>⭐️</Star>)}</div>
        </StatWrapper>
        <StatWrapper>
          <Label>Lichting nummer</Label> <div>{number}</div>
        </StatWrapper>
        <StatWrapper>
          <Label>Lichting proost</Label> {cheer}
        </StatWrapper>
      </UpperContent>
      <LowerContent>
        <strong>Over {name}</strong>
        <p>{bio}</p>
      </LowerContent>
    </Wrapper>
  )
}

export default BatchCard