import React from 'react'

function WaveDivider({ fill = 'white', inverted = false, className = '' }) {
  const viewBox = '0 0 1440 120'
  const cx = 720
  const cy = inverted ? 120 : 0
  const rx = 900
  const ry = 120

  return (
    <div className={className} style={{ lineHeight: 0, overflow: 'hidden' }}>
      <svg
        viewBox={viewBox}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '120px', display: 'block', verticalAlign: 'middle' }}
        aria-hidden="true"
      >
        <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={fill} />
      </svg>
    </div>
  )
}

export default WaveDivider
