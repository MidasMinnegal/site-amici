import React, {useState} from 'react'
import {extractImageProps} from "@/utils/extractImageProps";
import Image from "next/image";
import styled from "@emotion/styled";
import {breakPoint, colors, spacing, transitions} from "@/styles/variables";


const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${colors.white};
  z-index: 1;
  position: relative;
`

const Photo = styled(Image)`
  object-fit: cover;
  opacity: .75;
  transition: ${transitions.md};

  &:hover {
    opacity: 1;
  }
`

const PhotoWrapper = styled.button`
  position: relative;
  border: 0;
  width: ${({photosPerRow}) =>  100 / photosPerRow}%;
  padding-bottom: ${({photosPerRow}) =>  100 / photosPerRow}%;
  transition: ${transitions.md};
  cursor: pointer;
  background-color: ${colors.black};
  overflow: hidden;

  @media (max-width: ${breakPoint.mobile}) {
    width: 50%;
    padding-bottom: 50%;
  }
  
  &:hover {
    transform: scale(1.1);
    z-index: 1;
  }
`

const ImageOverlay = styled.button`
  background-color: rgba(0, 0, 0, .75);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 999;
  border: 0;
`

const ImageWrapper = styled.div`
  position: fixed;
  width: 90%;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  z-index: 1000;
`

const ImageBig = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
const buttonSize = "70px"

const ButtonWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(90% + ${buttonSize});
    display: flex;
    justify-content: space-between;
    z-index: 999;
    pointer-events: none;
`

const StyledButton = styled.button`
  width: ${buttonSize};
  height: ${buttonSize};
  border-radius: ${buttonSize};
  border: 0;
  cursor: pointer;
  background-color: ${colors.white};
  opacity: .5;
  transition: ${transitions.md};
  pointer-events: all;
  font-size: 2rem;
  
  &:hover {
    opacity: 1;
  }
  
  &[disabled] {
    opacity: 0;
    cursor: default;
  }
  
  &:first-of-type {
    transform: rotate(-180deg);
  }
`

const Button = styled.button`
  padding: ${spacing.md};
  border-radius: 9999px;
  border: 0;
  font-size: 1rem;
  background-color: ${colors.primary};
  color: ${colors.white};
  color: ${colors.white};
  margin: ${spacing.lg} auto;
  display: block;
  transform: scale(1);
  transition: ${transitions.md};
  cursor: pointer;
  
  &:hover {
    transform: scale(1.1);
  }
`

const PhotoGallery = ({photos, photosToShow=20, photosPerRow=5}) => {
  const [shownPhotos, setShownPhotos] = useState(photos.slice(0, photosToShow))
  const [activeImageIndex, setActiveImageIndex] = useState(-1)

  const activeImage = photos[activeImageIndex]

  return (
    <>
      <Wrapper>
        {shownPhotos.map((photo, index) =>
          <PhotoWrapper photosPerRow={photosPerRow} onClick={() => setActiveImageIndex(index)} key={index}>
            <Photo quality={80} {...extractImageProps(photo)} layout="fill" loading="lazy"/>
          </PhotoWrapper>
        )}
      </Wrapper>
      {activeImage && (
        <>
          <ImageOverlay onClick={() => setActiveImageIndex(-1)}>
            <ImageWrapper>
              <ImageBig sizes="100%" width={0} height={0} {...extractImageProps(activeImage)} />
            </ImageWrapper>
          </ImageOverlay>
          <ButtonWrapper>
            <StyledButton
              disabled={activeImageIndex === 0}
              onClick={() => setActiveImageIndex((oldVal) => oldVal - 1)}
            >▸</StyledButton>
            <StyledButton
              disabled={activeImageIndex === photos.length - 1}
              onClick={() => setActiveImageIndex((oldVal) => oldVal + 1)}
            >▸</StyledButton>
          </ButtonWrapper>
        </>
      )}
      {shownPhotos.length !== photos.length && (
        <Button onClick={() => setShownPhotos(photos)}>Laat alle foto&apos;s zien</Button>
      )}
    </>
  )
}

export default PhotoGallery
