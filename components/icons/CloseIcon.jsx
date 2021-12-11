import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

/* 
How to use svg in Expo project:
- Add react-native-svg to your project
- Find a svg picture or convert a picture to svg (there is some websites for this)
- Convert the svg file in to react component via this website: https://react-svgr.com/playground/?native=true

Why use svg picture?
- svg picture is vector based picture unlike png, jpg pictures which are pixel based...
- what ever you set the dimensions to the picture, you won't see any pixel and this without change the size of your file...
- however it is not possible to have complex svg pictures
- svg are ideal for logo/icon pictures...
*/

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
