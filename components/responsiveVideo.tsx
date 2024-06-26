import React from 'react'
import styled from '@emotion/styled'

interface ResponsiveVideoArg {
  src: string
  title?: string
}

const StyledResponsiveVideo = styled('div')({
  flexGrow: 1,
  position: 'relative',
  width: '100%',
  maxWidth: '100%',
  height: 0,
  paddingBottom: '56.25%',
  overflow: 'hidden',

  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
})

const ResponsiveVideo = ({ src, title = 'YouTube Video Player' }: ResponsiveVideoArg) => (
  <StyledResponsiveVideo>
    <iframe title={title} src={src} frameBorder="0" allowFullScreen />
  </StyledResponsiveVideo>
)

export default ResponsiveVideo
