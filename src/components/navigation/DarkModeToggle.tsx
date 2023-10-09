import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

interface DarkModeToggleProps {
  className?: string
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

function DarkModeToggle({
  darkMode,
  className,
  setDarkMode
}: DarkModeToggleProps) {
  const toggleMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <Tooltip title={darkMode ? 'Switch to light' : 'Switch to dark'}>
      <IconButton
        disableRipple
        className={className}
        onClick={toggleMode}
        color='inherit'>
        {darkMode ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
      </IconButton>
    </Tooltip>
  )
}
export default DarkModeToggle
