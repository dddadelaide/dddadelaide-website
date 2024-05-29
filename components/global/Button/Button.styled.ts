import { CSSObject } from '@emotion/react'
import styled from '@emotion/styled'
import { calcRem } from 'components/utils/styles/calcRem'
import { DDDTheme } from 'components/utils/styles/theme'
import { conditionalStyles } from 'components/utils/styles/conditionalStyles'
import { ButtonKinds, Size } from './Button'

function shouldStyledButtonForwardProps(prop: string) {
  return !['size', 'kind'].includes(prop)
}

export const StyledLinkButton = styled('button', {
  shouldForwardProp: shouldStyledButtonForwardProps,
})(({ theme }) => ({
  display: 'inline',
  padding: 0,
  margin: 0,
  textDecoration: 'underline',
  background: 'transparent',
  border: 'none',
  color: theme.colors.dddorange,
  cursor: 'pointer',

  '&:hoverm &:focus': {
    color: theme.colors.dddorange600,
  },
}))

function getButtonStylesForKind(kind: ButtonKinds, theme: DDDTheme): CSSObject {
  switch (kind) {
    case 'primary':
      return {
        backgroundColor: theme.colors.dddorange,
        color: theme.colors.white,
        fill: 'currentColor',

        '&:hover, &:focus': {
          backgroundColor: theme.colors.dddorange600,
          color: theme.colors.white,
        },

        '&:focus': {
          boxShadow: `0 0 0 ${calcRem(theme.metrics.xs)} ${theme.colors.dddorange}`,
        },
      }
    default:
      return {
        backgroundColor: theme.colors.grey300,
        color: theme.colors.dddorange,
        '&:hover, &:focus': {
          backgroundColor: theme.colors.grey400,
        },

        '&:focus': {
          boxShadow: `0 0 0 ${calcRem(theme.metrics.xs)} ${theme.colors.grey300}`,
        },
      }
  }
}

interface StyledButtonAnchorProps {
  kind: ButtonKinds
  size?: Size
}

export const StyledButtonAnchor = styled('a', {
  shouldForwardProp: shouldStyledButtonForwardProps,
})<StyledButtonAnchorProps>(({ theme, kind, size }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: calcRem(theme.metrics.md, theme.metrics.lg),
  fontWeight: theme.weights.medium,
  border: 0,
  cursor: 'pointer',
  lineHeight: 1,
  outline: 0,
  textDecoration: 'none',
  textTransform: 'uppercase',
  transition: 'background-color 0.2s linear',
  ...getButtonStylesForKind(kind, theme),

  ...conditionalStyles(size === 'lg', {
    padding: calcRem(theme.metrics.lg, theme.metrics.xl),
  }),

  '&[disabled]': {
    opacity: 0.65,
    pointerEvents: 'none',
  },

  '& > *:not(:first-child)': {
    marginLeft: calcRem(theme.metrics.md),
  },

  '& > svg': {
    width: calcRem(theme.metrics.lg),
    height: calcRem(theme.metrics.lg),
    fill: 'currentcolor',
  },
}))

export const StyledButton = StyledButtonAnchor.withComponent('button')
