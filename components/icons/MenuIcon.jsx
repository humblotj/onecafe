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

const MenuIcon = (props) => (
  <Svg
    viewBox="64 64 896 896"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <Path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
  </Svg>
);

export default MenuIcon;
