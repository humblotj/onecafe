import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CloseIcon = (props) => (
  <Svg
    style={{
      width: 12,
      height: 12,
    }}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"
    />
  </Svg>
);

export default CloseIcon;
