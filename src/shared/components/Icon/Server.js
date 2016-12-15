/* @flow */
/* eslint max-len: ["error", 1000] */

import React from 'react'
import Svg, { G, Path } from 'react-native-svg'

type Props = {
  color: string,
  size: number,
}

const Server = (props: Props) => {
  const { color, size } = props
  const ratio = 207 / 66
  return (
    <Svg width={ratio * size} height={size} viewBox="409 261 207 66">
      <G fill="none" fillRule="evenodd">
        <Path d="M533.573 266.044c.44 0 .803.36.803.804l1.39 4.777c2.362.53 4.568 1.457 6.554 2.714l4.367-2.4c.155-.16.363-.24.57-.24.2 0 .408.08.563.23l3.327 3.32c.314.31.314.82 0 1.13l-2.398 4.36c1.25 1.98 2.18 4.19 2.71 6.55l4.78 1.39c.44 0 .8.36.8.8v4.7c0 .444-.36.804-.81.804l-4.78 1.39c-.53 2.36-1.46 4.57-2.72 6.55l2.39 4.363c.315.317.32.822.004 1.14l-3.328 3.323c-.16.158-.368.237-.57.237-.206 0-.41-.08-.57-.236l-4.366-2.4c-1.98 1.258-4.193 2.19-6.556 2.717l-1.39 4.776c0 .443-.36.802-.8.802h-4.705c-.444 0-.804-.36-.804-.804l-1.39-4.772c-2.366-.526-4.576-1.46-6.56-2.716l-4.366 2.4c-.154.157-.36.236-.57.236-.2 0-.41-.08-.563-.23l-3.325-3.33c-.31-.314-.31-.82 0-1.14l2.4-4.36c-1.257-1.98-2.19-4.19-2.715-6.55l-4.78-1.39c-.447 0-.806-.358-.806-.8v-4.7c0-.444.36-.803.805-.803l4.78-1.39c.53-2.36 1.46-4.57 2.712-6.55l-2.4-4.366c-.315-.31-.315-.82 0-1.13l3.325-3.327c.16-.156.364-.233.568-.233.21 0 .41.076.57.23l4.367 2.4c1.984-1.26 4.194-2.18 6.556-2.71l1.39-4.774c0-.447.36-.806.8-.806h4.71zm-2.353 35.31c5.247 0 9.503-4.25 9.503-9.497 0-5.246-4.256-9.497-9.503-9.497-5.248 0-9.504 4.25-9.504 9.497 0 5.246 4.256 9.498 9.504 9.498zm2.353-40.25h-4.707c-2.823 0-5.176 2.048-5.655 4.736l-.52 1.8c-.87.307-1.73.663-2.57 1.063l-1.64-.9c-.95-.672-2.09-1.033-3.29-1.033-1.53 0-2.97.597-4.06 1.682l-3.33 3.323c-1.08 1.08-1.68 2.522-1.68 4.057 0 1.196.36 2.335 1.04 3.295l.9 1.634c-.4.84-.75 1.7-1.06 2.57l-1.8.53c-2.69.48-4.73 2.83-4.73 5.65v4.71c0 2.82 2.05 5.18 4.74 5.65l1.8.52c.31.88.668 1.74 1.07 2.57l-.903 1.65c-1.56 2.24-1.343 5.35.65 7.34l3.33 3.33c1.087 1.09 2.528 1.68 4.06 1.68 1.197 0 2.335-.36 3.296-1.03l1.636-.9c.84.41 1.694.76 2.57 1.07l.52 1.8c.48 2.69 2.837 4.73 5.66 4.73h4.705c2.826 0 5.18-2.04 5.658-4.73l.52-1.8c.88-.3 1.737-.66 2.57-1.06l1.638.9c.96.67 2.1 1.037 3.293 1.037 1.53 0 2.97-.597 4.06-1.68l3.33-3.325c1.99-1.992 2.21-5.1.65-7.34l-.91-1.65c.402-.833.756-1.69 1.07-2.57l1.8-.52c2.69-.48 4.74-2.83 4.74-5.652v-4.7c0-2.82-2.05-5.173-4.738-5.65l-1.804-.523c-.31-.877-.66-1.73-1.064-2.57l.908-1.648c1.55-2.234 1.34-5.34-.645-7.333l-3.337-3.33c-1.085-1.08-2.526-1.68-4.06-1.68-1.2 0-2.337.365-3.297 1.038l-1.64.9c-.838-.4-1.69-.76-2.57-1.064l-.524-1.8c-.48-2.685-2.832-4.73-5.655-4.73zm-2.353 35.314c-2.515 0-4.56-2.047-4.56-4.56 0-2.515 2.045-4.56 4.56-4.56 2.513 0 4.56 2.045 4.56 4.56 0 2.513-2.047 4.56-4.56 4.56z" fillOpacity=".5" fill={color} />
        <Path d="M549.67 326.086h51.693c7.663 0 13.838-6.172 13.838-13.83 0-7.656-6.17-13.827-13.83-13.827-.57 0-1.14 0-1.71.11 0-7.66-6.17-13.83-13.84-13.83-6.74 0-12.46 4.91-13.61 11.43-1.94-.92-4.11-1.37-6.29-1.37-5.83 0-11.09 3.2-13.61 8.34-.8-.23-1.71-.35-2.63-.35-6.29 0-11.43 5.26-11.43 11.66-.11 6.51 5.03 11.65 11.44 11.65z" fill={color} />
        <Path d="M601.36 301.857c5.72 0 10.41 4.686 10.41 10.4s-4.69 10.4-10.41 10.4h-51.69c-4.462 0-8.12-3.657-8.12-8.114 0-4.572 3.544-8.23 8.004-8.23 1.144 0 2.287.344 3.088.573.915.343 1.83-.115 2.173-1.03 1.83-4.685 6.176-7.656 11.093-7.656 2.402 0 4.804.8 6.748 2.17.572.344 1.258.46 1.83.116.57-.343.915-.915.915-1.486v-.343c0-5.714 4.69-10.4 10.41-10.4s10.41 4.686 10.41 10.4c0 .572-.11 1.257-.23 1.943-.11.57.12 1.143.58 1.6.46.343 1.03.457 1.6.343 1.15-.457 2.06-.686 3.21-.686L605.14 315" fill="#FEFEFE" />
        <Path d="M475.33 326.086h-51.693c-7.663 0-13.838-6.172-13.838-13.83 0-7.656 6.17-13.827 13.83-13.827.57 0 1.14 0 1.71.11 0-7.66 6.17-13.83 13.84-13.83 6.74 0 12.46 4.91 13.61 11.43 1.94-.92 4.11-1.37 6.29-1.37 5.83 0 11.09 3.2 13.61 8.34.8-.23 1.71-.35 2.63-.35 6.29 0 11.43 5.26 11.43 11.66.11 6.51-5.03 11.65-11.44 11.65z" fill={color} />
        <Path d="M423.64 301.857c-5.72 0-10.41 4.686-10.41 10.4s4.69 10.4 10.41 10.4h51.69c4.462 0 8.12-3.657 8.12-8.114 0-4.572-3.544-8.23-8.004-8.23-1.144 0-2.287.344-3.088.573-.915.343-1.83-.115-2.173-1.03-1.83-4.685-6.176-7.656-11.093-7.656-2.402 0-4.804.8-6.748 2.17-.572.344-1.258.46-1.83.116-.57-.343-.915-.915-.915-1.486v-.343c0-5.714-4.69-10.4-10.41-10.4s-10.41 4.686-10.41 10.4c0 .572.11 1.257.23 1.943.11.57-.12 1.143-.58 1.6-.46.343-1.03.457-1.6.343-1.15-.457-2.06-.686-3.21-.686L419.86 315" fill="#FEFEFE" />
        <Path d="M547.356 326.086h-68.543c-10.16 0-18.35-8.183-18.35-18.337s8.19-18.34 18.35-18.34c.758 0 1.516 0 2.275.15 0-10.16 8.188-18.34 18.35-18.34 8.946 0 16.528 6.51 18.044 15.15 2.578-1.22 5.46-1.82 8.34-1.82 7.734 0 14.71 4.24 18.046 11.06 1.062-.31 2.275-.46 3.488-.46 8.34 0 15.164 6.97 15.164 15.45.152 8.635-6.672 15.455-15.164 15.455z" fill={color} />
        <Path d="M478.813 293.96c-7.582 0-13.8 6.213-13.8 13.79 0 7.576 6.218 13.79 13.8 13.79h68.543c5.914 0 10.767-4.85 10.767-10.76 0-6.06-4.7-10.91-10.615-10.91-1.517 0-3.033.454-4.095.757-1.213.455-2.426-.15-2.88-1.364-2.427-6.213-8.19-10.153-14.71-10.153-3.185 0-6.37 1.06-8.947 2.88-.76.454-1.67.606-2.427.15-.76-.454-1.22-1.21-1.22-1.97v-.454c0-7.577-6.22-13.79-13.8-13.79-7.58 0-13.8 6.213-13.8 13.79 0 .758.15 1.667.3 2.577.15.757-.15 1.515-.76 2.12-.61.456-1.37.607-2.12.456-1.52-.61-2.73-.91-4.25-.91z" fill="#FEFEFE" />
      </G>
    </Svg>
  )
}

export default Server