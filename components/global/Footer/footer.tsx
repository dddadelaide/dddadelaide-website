import React from 'react'
import { useConfig } from 'Context/Config'
import { SocialLinks } from './socialLinks'
import { StyledFooter, StyledFooterContainer, StyledArrowIcon, StyledTopAnchor } from './Footer.styled'
import { NavProps } from '../Nav/Nav'

export const Footer = ({ menu }: NavProps): JSX.Element => {
  const { conference } = useConfig()

  return (
    <StyledFooter>
      <SocialLinks socials={conference.Socials} />

      <StyledFooterContainer>
        <StyledTopAnchor href="#">
          <span>Pop to the top</span> <StyledArrowIcon />
        </StyledTopAnchor>
        <p>
          Copyright &copy; {new Date().getFullYear()} {conference.Organiser.Name}
          {menu &&
            menu.map((item) => (
              <span key={item.href}>
                &nbsp; |&nbsp;
                <a href={item.href}>{item.name}</a>
              </span>
            ))}
        </p>
      </StyledFooterContainer>
    </StyledFooter>
  )
}
