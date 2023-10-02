import { createTheme } from '@mui/material/styles'
import colors from './colors'
import componentStyleOverrides from './compStyleOverride'
import themePalette from './palette'
import themeTypography from './typography'

const color = colors

const themeOption = {
  customization: {
    borderRadius: 14
  },
  colors: color,
  heading: color.grey900,
  paper: color.paper,
  backgroundDefault: color.paper,
  background: color.primaryLight,
  darkTextPrimary: color.grey900,
  darkTextSecondary: color.grey500,
  textDark: color.grey900,
  menuSelected: color.secondaryDark,
  menuSelectedBack: color.secondaryLight,
  divider: color.grey200
}

export type ThemeOption = typeof themeOption

const themeOptions = {
  direction: 'ltr' as const,

  palette: themePalette(themeOption),
  mixins: {
    toolbar: {
      minHeight: '48px',
      padding: '16px',
      '@media (min-width: 600px)': {
        minHeight: '48px'
      }
    }
  },
  typography: themeTypography(themeOption)
}

const theme = createTheme(themeOptions)

theme.components = componentStyleOverrides(themeOption)

export default theme
