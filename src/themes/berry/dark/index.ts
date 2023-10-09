import { createTheme } from '@mui/material/styles'
import colors from './colors'
import componentStyleOverrides from './compStyleOverride'
import themeTypography from './typography'
import { ThemeOption, mixins } from '../themeOptions'
import themePalette from './palette'
import commonThemeOption from '../commonThemeOptions'

const color = { ...colors, ...commonThemeOption.colors }

const themeOption = {
  ...commonThemeOption,
  colors: color,
  paper: color.paper,
  backgroundDefault: color.paper,
  darkTextPrimary: color.grey100,
  textDark: color.grey100,
  menuSelected: color.secondaryDark,
  menuSelectedBack: color.darkLevel2
} as ThemeOption

const themeOptions = {
  direction: 'ltr' as const,

  palette: themePalette(themeOption, 'dark'),
  mixins,
  typography: themeTypography(themeOption)
}

const theme = createTheme(themeOptions)

theme.components = componentStyleOverrides(themeOption)

export default theme
