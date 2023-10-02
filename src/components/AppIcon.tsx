import React from 'react'

interface AppIconProps {
  className?: string
  onClick?: () => void
}

const AppIcon = (props: AppIconProps) => {
  return (
    <span
      onClick={props.onClick}
      className={`${props.className} font-header ${
        props.onClick ? 'cursor-pointer' : ''
      } `}>
      <span className='font-light'>copy</span>
      <span className='font-bold'>fuse</span>
    </span>
  )
}

export default AppIcon
