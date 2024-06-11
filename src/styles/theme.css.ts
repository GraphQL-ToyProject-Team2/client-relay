import { createGlobalTheme } from '@vanilla-extract/css'

const root = createGlobalTheme('#root', {
  colors: {
    black: '#222222',
    gray: '#6A6A6A',
    white: '#FFFFFF',
    primary: '#FF385C',
  },
})

const vars = { ...root }
export default vars
