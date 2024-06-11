import { style } from '@vanilla-extract/css'
import vars from '@/styles/theme.css'

export const test = style({
  color: vars.colors.primary,
})

export const button = style({
  border: '1px solid #000',
  padding: '10px',
  borderRadius: '5px',
  ':hover': {
    backgroundColor: vars.colors.primary,
    color: vars.colors.white,
    border: 'none',
  },
})
