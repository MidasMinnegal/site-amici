import React from 'react'
import styled from "@emotion/styled";
import Link from "next/link";
import {breakPoint, colors, fonts, spacing, transitions} from "@/styles/variables";
import {extractImageProps} from "@/utils/extractImageProps";
import Image from 'next/image'

const rowSize = 5

const Wrapper = styled(Link)`
  text-decoration: none;
  color: ${colors.black};
  width: calc((100% / ${rowSize}) - ((${spacing.md} / ${rowSize}) * ${rowSize }));
  display: inline-block;
  margin-right: ${spacing.md};
  border-radius: ${spacing.md};
  background-color: transparent;
  transition: ${transitions.md};
  text-align: center;
  margin-bottom: ${spacing.md};
  padding: ${spacing.md};
  
  &:nth-child(${rowSize}n) {
    margin-right: 0;
  }
  
  &:hover {
    background-color: ${colors.white};
  }

  @media (max-width: ${breakPoint.mobile}) {
    width: calc(50% - ${spacing.md} / 2);

    &:nth-child(${rowSize}n) {
      margin-right: ${spacing.md};
    }

    &:nth-child(2n) {
      margin-right: 0};
    }
  }
`

const ImageWrapper = styled.div`
  width:  100%;
  padding-bottom: 100%;
  border-radius: 50%;
  background-color: ${colors.white};
  position: relative;
  overflow: hidden;
`

const ProfileImage = styled(Image)`
  object-fit: cover;
`
const Name = styled.span`
  font-family: ${fonts.header};
  font-size: 2rem;
  color: ${colors.primary};
  margin-top: ${spacing.md};
  display: block;
`


const MembersCard = ({name, profileImage, slug}) => {


  return (
    <Wrapper href={`/lid/${slug}`}>
      <ImageWrapper>
        <ProfileImage {...extractImageProps(profileImage)} layout="fill"/>
      </ImageWrapper>
      <Name>{name}</Name>
    </Wrapper>
  )
}

export default MembersCard