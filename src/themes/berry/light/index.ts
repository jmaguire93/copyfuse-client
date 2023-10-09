import { createTheme } from '@mui/material/styles'
import colors from './colors'
import componentStyleOverrides from './compStyleOverride'
import themeTypography from './typography'
import { ThemeOption, mixins } from '../themeOptions'
import themePalette from './palette'
import commonThemeOption from '../commonThemeOptions'

const color = { ...colors, ...commonThemeOption.colors }

export const themeOption = {
  ...commonThemeOption,
  colors: color,
  paper: color.paper,
  backgroundDefault: color.paper,
  darkTextPrimary: color.grey900,
  textDark: color.grey900,
  menuSelected: color.secondaryDark,
  menuSelectedBack: color.secondaryLight
} as ThemeOption

const themeOptions = {
  direction: 'ltr' as const,

  palette: themePalette(themeOption, 'light'),
  mixins,
  typography: themeTypography(themeOption)
}

const theme = createTheme(themeOptions)

theme.components = componentStyleOverrides(themeOption)

export default theme
