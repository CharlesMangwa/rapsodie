/* @flow */
/* eslint max-len: ["error", 1000] */

import React from 'react'
import Svg, { Ellipse, G, Path } from 'react-native-svg'

type Props = { size: number }

const Awesome = (props: Props) => {
  const { size } = props
  const ratio = 90 / 92
  return (
    <Svg width={ratio * size} height={size} viewBox="0 0 90 92">
      <G fill="none" fillRule="evenodd">
        <Ellipse fill="#FCDB74" cx="47.5" cy="49" rx="42.5" ry="42" />
        <Path d="M8.384 61.735c-.383 0-.775.025-1.17.063-1.254-4.005-1.93-8.263-1.93-12.68 0-23.395 18.963-42.36 42.357-42.36.49 0 .974.02 1.458.037-.28 2.156.004 4.41.816 6.633-.752-.048-1.51-.08-2.273-.08-19.723 0-35.768 16.046-35.768 35.77 0 5.363 1.193 10.45 3.317 15.02-1.927-1.545-4.26-2.403-6.806-2.403M80.41 22.28c-1.803 1.696-3.557 3.06-5.153 4.128 5.092 6.18 8.154 14.095 8.154 22.71 0 19.723-16.046 35.77-35.77 35.77-5.214 0-10.167-1.132-14.64-3.148-.622.973-1.35 1.924-2.177 2.84-.77.85-1.537 1.612-2.298 2.334 5.744 2.91 12.235 4.563 19.116 4.563C71.036 91.477 90 72.51 90 49.117c0-10.186-3.598-19.53-9.59-26.837" fill="#FCDB74" />
        <Path d="M40.424 46.46c.863 0 1.724-.337 2.37-1.007 1.265-1.31 1.228-3.395-.08-4.66-7.325-7.067-16.683-3.25-20.608-.244-1.44 1.102-1.712 3.155-.617 4.6 1.093 1.444 3.156 1.728 4.61.64 6.727-5.045 11.513-.76 12.037-.254.638.617 1.464.924 2.287.924M52.078 40.55c-1.44 1.102-1.712 3.155-.617 4.6 1.095 1.444 3.157 1.728 4.61.64 6.73-5.045 11.515-.76 12.038-.254.64.617 1.464.924 2.29.924.86 0 1.723-.337 2.37-1.007 1.262-1.31 1.226-3.395-.084-4.66-7.322-7.067-16.682-3.25-20.606-.244M58.104 57.253c-9.53 8.26-17.94.957-18.874.09-1.323-1.243-3.4-1.184-4.648.133-1.25 1.32-1.196 3.406.124 4.657 2.716 2.576 7.914 5.594 14.066 5.594 4.26 0 8.98-1.45 13.65-5.494 1.374-1.193 1.52-3.272.33-4.648-1.192-1.375-3.273-1.52-4.648-.332" fill="#000" />
        <Path d="M25.557 64.847c-.444-.06-.87-.088-1.278-.088-5.035 0-7.26 4.26-7.95 5.96-.686-1.7-2.914-5.96-7.946-5.96-.41 0-.834.028-1.28.087-7.308.978-10.06 9.928-3.023 17.703 3.987 4.403 7.94 6.875 10.62 8.192.616.303 1.165.544 1.63.735.468-.19 1.015-.432 1.632-.735 2.68-1.317 6.634-3.79 10.62-8.192 7.036-7.775 4.284-16.725-3.025-17.703M66.718 25.982c.617.304 1.165.545 1.63.735.468-.19 1.017-.43 1.633-.735 2.682-1.316 6.635-3.79 10.62-8.19 7.037-7.777 4.285-16.727-3.024-17.704-.444-.06-.87-.088-1.28-.088-5.032 0-7.258 4.26-7.947 5.96C67.66 4.26 65.434 0 60.4 0c-.408 0-.833.027-1.28.088-7.307.977-10.06 9.927-3.022 17.703 3.985 4.403 7.938 6.876 10.618 8.192" fill="#F15169" />
      </G>
    </Svg>
  )
}

export default Awesome