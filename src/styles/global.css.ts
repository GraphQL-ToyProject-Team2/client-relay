import { globalStyle } from '@vanilla-extract/css'

globalStyle('*', {
  margin: 0,
  padding: 0,

  color: 'inherit',
  verticalAlign: 'baseline',
})

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('body', {
  width: 375,
  backgroundColor: '#FFF',
})

globalStyle(':root', {
  overflowX: 'hidden',
  overflowY: 'scroll',

  width: '100%',
  height: '100%',
  display: 'flex',
  backgroundColor: '#f7f7f7',
  justifyContent: 'center',
  lineHeight: 1.5,
})

globalStyle('button', {
  cursor: 'pointer',
  background: 'none',
  border: 0,
})

globalStyle('a', {
  textDecoration: 'none',
})
