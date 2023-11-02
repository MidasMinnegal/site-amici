import React from 'react'
import {extractImageProps} from "@/utils/extractImageProps";
import styled from "@emotion/styled";
import Image from 'next/image'

const headerHeight = '50vh'
const headerHeightMin = '400px'

const HeaderWrapper = styled.div`
  height: ${headerHeight};
  min-height: ${headerHeightMin};
`

const HeaderContent = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  height: ${headerHeight};
  min-height: ${headerHeightMin};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
`

const BackgroundImage = styled(Image)`
  width: 100%;
  height: 100%;
  position: relative;
  object-fit: cover;
`

const HeaderImage = ({image}) => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <BackgroundImage
          {...extractImageProps(image)}
          layout='fill'
          priority
        />
      </HeaderContent>
    </HeaderWrapper>
  )
}



export default HeaderImage