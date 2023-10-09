import { CommonThemeOption } from './commonThemeOptions'

type ExtraThemeOptions = {
  colors: {
    [key: string]: string
  }
  paper: string
  backgroundDefault: string
  darkTextPrimary: string
  textDark: string
  menuSelected: string
  menuSelectedBack: string
}

export type ThemeOption = ExtraThemeOptions & CommonThemeOption

export const mixins = {
  toolbar: {
    minHeight: '48px',
    padding: '16px',
    '@media (min-width: 600px)': {
      minHeight: '48px'
    }
  }
}
