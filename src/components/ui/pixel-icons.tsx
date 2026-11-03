import React from 'react'

interface PixelIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number
  className?: string
  filled?: boolean
}

export function PixelTrophy({ size = 20, className = '', ...props }: PixelIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="12" height="2" />
      <rect x="2" y="4" width="2" height="4" />
      <rect x="12" y="4" width="2" height="4" />
      <rect x="4" y="4" width="8" height="5" />
      <rect x="5" y="9" width="6" height="2" />
      <rect x="7" y="11" width="2" height="2" />
      <rect x="4" y="13" width="8" height="2" />
    </svg>
  )
}

export function PixelScroll({ size = 20, className = '', ...props }: PixelIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="1" width="9" height="2" />
      <rect x="2" y="3" width="11" height="10" />
      <rect x="4" y="5" width="7" height="1" fill="#08080a" />
      <rect x="4" y="7" width="7" height="1" fill="#08080a" />
      <rect x="4" y="9" width="5" height="1" fill="#08080a" />
      <rect x="4" y="13" width="9" height="2" />
    </svg>
  )
}

export function PixelBolt({ size = 20, className = '', ...props }: PixelIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect x="7" y="1" width="4" height="2" />
      <rect x="6" y="3" width="4" height="2" />
      <rect x="5" y="5" width="5" height="2" />
      <rect x="3" y="7" width="10" height="2" />
      <rect x="6" y="9" width="5" height="2" />
      <rect x="7" y="11" width="3" height="2" />
      <rect x="8" y="13" width="2" height="2" />
    </svg>
  )
}

export function PixelHeart({ size = 16, className = '', ...props }: PixelIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="3" width="4" height="2" />
      <rect x="10" y="3" width="4" height="2" />
      <rect x="1" y="5" width="14" height="4" />
      <rect x="2" y="9" width="12" height="2" />
      <rect x="4" y="11" width="8" height="2" />
      <rect x="6" y="13" width="4" height="2" />
    </svg>
  )
}

export function PixelCoin({ size = 16, className = '', ...props }: PixelIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect x="4" y="1" width="8" height="2" />
      <rect x="2" y="3" width="12" height="2" />
      <rect x="1" y="5" width="14" height="6" />
      <rect x="2" y="11" width="12" height="2" />
      <rect x="4" y="13" width="8" height="2" />
      <rect x="6" y="5" width="4" height="6" fill="#08080a" />
    </svg>
  )
}

export function PixelCross({ size = 14, className = '', ...props }: PixelIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect x="1" y="1" width="2" height="2" />
      <rect x="9" y="1" width="2" height="2" />
      <rect x="3" y="3" width="2" height="2" />
      <rect x="7" y="3" width="2" height="2" />
      <rect x="5" y="5" width="2" height="2" />
      <rect x="3" y="7" width="2" height="2" />
      <rect x="7" y="7" width="2" height="2" />
      <rect x="1" y="9" width="2" height="2" />
      <rect x="9" y="9" width="2" height="2" />
    </svg>
  )
}

export function PixelStar({ size = 12, className = '', ...props }: PixelIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect x="5" y="1" width="2" height="2" />
      <rect x="5" y="3" width="2" height="2" />
      <rect x="1" y="4" width="10" height="2" />
      <rect x="3" y="6" width="6" height="2" />
      <rect x="2" y="8" width="3" height="2" />
      <rect x="7" y="8" width="3" height="2" />
      <rect x="1" y="10" width="2" height="1" />
      <rect x="9" y="10" width="2" height="1" />
    </svg>
  )
}

