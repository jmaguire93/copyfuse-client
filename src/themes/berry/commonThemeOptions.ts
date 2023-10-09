import colors from './commonColors'

export const commonThemeOption = {
  customization: {
    borderRadius: 14
  },
  colors,
  heading: colors.grey900,
  background: colors.primaryLight,
  darkTextSecondary: colors.grey500,
  divider: colors.grey200
}

export type CommonThemeOption = typeof commonThemeOption

export default commonThemeOption
