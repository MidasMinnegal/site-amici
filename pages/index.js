import React from 'react'
import {client} from "@/utils/contentfulClient";
import {Container} from "@/styles/containers";
import HeaderImage from "@/components/HeaderImage";
import styled from "@emotion/styled";
import {breakPoint, colors, fonts, spacing} from "@/styles/variables";
import {extractImageProps} from "@/utils/extractImageProps";
import Image from "next/image";
import MembersCard from "@/components/MembersCard";
import PhotoGallery from "@/components/PhotoGallery";

const ContentWrapper = styled.div`
  padding-bottom: ${spacing.xl};
  background-color: ${colors.white};
  z-index: 1;
  position: relative;
  overflow: hidden;
  width: 100%;
  
  &::before {
    width: 100%;
    height: 100%;
    position: absolute;
    content: "";
    z-index: -1;
    background-image: url("./logo.png");
    opacity: .1;
    background-size: 70%;
    background-repeat: no-repeat;
    background-position: 10% 50%;

    @media (max-width: ${breakPoint.mobile}) {
      display: none;
    }
  }
`

const AboutInner = styled.div`
  width: calc(50% - ${spacing.lg});
  position: relative;

  @media (max-width: ${breakPoint.mobile}) {
    width: 100%;
    margin-bottom: ${spacing.md};
  }
`

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: ${breakPoint.mobile}) {
    flex-direction: column;
  }
`

const AboutUsImage = styled(Image)`
  width: 100%;
  height: auto;
`

const QuoteContainer = styled(Container)`
  text-align: center;
`

const Quote = styled.span`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  display: inline-block;
  margin: ${spacing.xl} 0;
  position: relative;
  padding-bottom: 1rem;
  font-family: ${fonts.header};
  color: ${colors.grey};

  @media (max-width: ${breakPoint.mobile}) {
    margin: ${spacing.lg} 0;
  }
`

const QuoteAuthor = styled.span`
  font-size: 1rem;
  position: absolute;
  bottom: 0;
  right: 0;
  font-weight: 400;
  color: ${colors.primary};
`

const Title = styled.h1`
  width: 100%;
  text-align: center;
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: ${spacing.md};
  
  &::before,
  &::after {
    background-color: currentColor;
    content: "";
    width: 100%;
    height: 1px;
    left: 0;
    top: ${spacing.sm};
  }
  
  &::after {
    top: auto;
    bottom: ${spacing.sm};
  }
`

const PeopleWrapper = styled.div`
  background-color: ${colors.secondary};
  width: 100%;
  padding: ${spacing.xl} 0;
  z-index: 1;
  position: relative;
`

const MemberWrapper = styled.div`
  text-align: center;
`

const Home = ({
  title,
  aboutUsTitle,
  aboutUsText,
  headerImage,
  aboutUsImage,
  quote,
  quotePerson,
  membersTitle,
  members,
  photos
}) => {
  return (
    <>
      <HeaderImage image={headerImage}/>
        <ContentWrapper>
          <Title>{title}</Title>
          <QuoteContainer>
            <Quote>
              &#34;{quote}&#34;
              <QuoteAuthor>
                ~ {quotePerson}
              </QuoteAuthor>
            </Quote>
          </QuoteContainer>
          <StyledContainer>
            <AboutInner>
              <h2>{aboutUsTitle}</h2>
              <p>{aboutUsText}</p>
            </AboutInner>
            <AboutInner>
              <AboutUsImage {...extractImageProps(aboutUsImage)} sizes="100%" width={0} height={0}/>
            </AboutInner>
          </StyledContainer>
        </ContentWrapper>
        <PeopleWrapper>
          <Container>
            <h2>{membersTitle}</h2>
            <MemberWrapper>
              {members.map(({fields}, index) => <MembersCard {...fields} key={index}/>)}
            </MemberWrapper>
          </Container>
        </PeopleWrapper>
        <PhotoGallery photos={photos}/>
    </>
  )
}

export const getStaticProps = async () => ({
  props: {...await client.getEntry('u1X9WOE7XolIKJBXetPQC')}.fields
})

export default Home