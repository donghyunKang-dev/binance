import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      textColor: string
      bgColor: string
      subColor: string
      subBgColor: string
      inputColor: string
      labelColor: string
      progressColor: string
    }
  }
}
