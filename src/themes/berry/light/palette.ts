import commonThemePaletteOptions from '../palette'
import { ThemeOption } from '../themeOptions'
import { PaletteMode } from '@mui/material'

export default function themePalette(theme: ThemeOption, mode: PaletteMode) {
  const commonPalette = commonThemePaletteOptions(theme)

  return {
    mode: mode,
    ...commonPalette,
    shell: {
      background: theme.colors?.background,
      contrastBackground: theme.colors?.paper
    }
  }
}
