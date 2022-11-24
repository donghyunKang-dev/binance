import { DefaultTheme } from 'styled-components'

const Darktheme: DefaultTheme = {
  colors: {
    textColor: '#111',
    subColor: '#707a8a',
    bgColor: '#fafafa',
    subBgColor: 'white',
    inputColor: '#f2f3f5',
  },
}

const Lighttheme: DefaultTheme = {
  colors: {
    textColor: 'white',
    subColor: '#707a8a',
    bgColor: '#14151a',
    subBgColor: '#252930',
    inputColor: '#252930',
  },
}

export { Darktheme, Lighttheme }
