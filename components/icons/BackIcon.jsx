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

const BackIcon = (props) => (
  <Svg width={20} height={20} viewBox="0 0 1024 1024" fill="#fff" {...props}>
    <Path d="M230.2 178.2 64.1 345.5 230.5 512 397 678.5l30.5-30.5c16.8-16.8 30.4-31 30.3-31.7-.2-.6-44.2-45.4-97.8-99.5-53.6-54.1-104.2-105.2-112.5-113.6l-15-15.3 148 .4c161.5.3 155.8.1 188.5 6.3 152.5 28.5 272.1 149.5 298 301.5 5.3 31 5.2 28.7 5.7 176.6l.4 138.3h87l-.4-141.7c-.4-148.2-.4-147.9-4.7-175.8-20.2-129.5-92-242.3-200.7-315.3-53.3-35.8-115.6-60.5-179.3-71.1-33.9-5.7-27.5-5.5-190.8-6l-151.3-.6 112.3-113.4C407 124.8 457.7 73.3 457.9 72.7c.3-.9-59.7-61.7-61-61.7-.3 0-75.3 75.3-166.7 167.2z" />
  </Svg>
);

export default BackIcon;
