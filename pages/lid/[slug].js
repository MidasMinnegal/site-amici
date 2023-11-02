import {client} from "@/utils/contentfulClient";
import HeaderImage from "@/components/HeaderImage";
import {Container} from "@/styles/containers";
import styled from "@emotion/styled";
import {breakPoint, colors, spacing, transitions} from "@/styles/variables";
import BatchCard, {batchCardWidth} from "@/components/BatchCard";
import MembersCard from "@/components/MembersCard";
import React from "react";
import PhotoGallery from "@/components/PhotoGallery";
import Link from "next/link";

const ContentWrapper = styled.div`
  background-color: ${colors.white};
  z-index: 2;
  position: relative;
  padding-top: ${spacing.lg};
`

const InnerWrapper = styled.div`
  width: calc(100% - ${batchCardWidth});
  padding-right: ${spacing.lg};

  @media (max-width: ${breakPoint.mobile}) {
    width: 100%;
    padding-right: 0;
  }
`

const StyledContainer = styled(Container)`
  display: flex;
  align-items: flex-start;

  @media (max-width: ${breakPoint.mobile}) {
    flex-direction: column;
  }
`

const Name = styled.h1`
  margin-bottom: ${spacing.md};
`

const MemberContainer = styled(Container)`
  text-align: center;
`

const MemberContent = styled.div`
  background-color: ${colors.secondary};
  padding: ${spacing.lg} 0;
  position: relative;
  z-index: 1;
`

const PhotoWrapper = styled.div`
  margin: ${spacing.lg} 0;
`

const Button = styled(Link)`
  padding: ${spacing.md};
  border-radius: 9999px;
  border: 0;
  font-size: 1rem;
  background-color: ${colors.primary};
  color: ${colors.white};
  margin: ${spacing.lg} auto;
  display: inline-block;
  transform: scale(1);
  transition: ${transitions.md};
  cursor: pointer;
  
  &:hover {
    transform: scale(1.1);
  }
  text-decoration: none;
`

const Member = ({fields, otherMembers}) => {
const {name, bio, headerImage, batch, personalImages} = fields
  console.log(personalImages)
  return (
    <div>
      <HeaderImage image={headerImage} />
      <ContentWrapper>
        <StyledContainer>
          <InnerWrapper>
            <Name>{name}</Name>
            <p>{bio}</p>
            {personalImages && (
              <PhotoWrapper>
                <h2>Foto&apos;s van {name}</h2>

                <PhotoGallery photos={personalImages} photosPerRow={3} photosToShow={9}/>
              </PhotoWrapper>
            )}
          </InnerWrapper>
          <BatchCard {...batch.fields}/>
        </StyledContainer>
      </ContentWrapper>
      <MemberContent>
        <MemberContainer>
          <h2>Bekijk ook onze andere leden</h2>
          {otherMembers.map(({fields}, index) => <MembersCard {...fields} key={index}/>)}
        </MemberContainer>
        <MemberContainer>
          <Button href={"/"}>Terug naar de homepage</Button>
        </MemberContainer>
      </MemberContent>
    </div>
  )
}

export default Member

export async function getStaticPaths(variable) {
  const {items} = await client.getEntries({content_type: 'member'})
  const paths = items.map(({fields}) => `/lid/${fields.slug}`)

  return {
    paths,
    fallback: false
  }
}


export async function getStaticProps({params}) {
  const {slug} = params

  const {items} = await client.getEntries({
    content_type: 'member',
  })

  const otherMembers = items.filter(({fields}) => fields.slug !== slug && fields.isActive)
  const thisMember = items.find(({fields}) => fields.slug === slug)

  if(!thisMember) return {notFound: true}

  return {props: {...thisMember, otherMembers}}
}

