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

const Logo = (props) => (
  <Svg width={38} height={30} fill="#000" viewBox="0 0 89 70" {...props}>
    <Path d="M34.5 4.6C13.4 9.8 3 21.4 5.4 37.2c.9 5.8 7 13.9 11.4 15.2 6.6 1.9 24.5-2.6 25.4-6.3 1.2-4.8-3.1-8.1-11.7-9.1l-5-.6 3-1.4c1.7-.7 5.6-1.5 8.7-1.8 4.7-.3 5.9-.1 6.4 1.2.3.9.1 2.3-.6 3-.9 1.2-.8 2 .6 4.1 1.7 2.6 1.8 2.6 3.1.9 2.6-3.5 3.3-8.4 1.8-12-1.7-4.2-6-6.8-13.6-8.3-5.9-1.2-7.6-2.8-3.9-3.8 3.9-1 2-2.6-2.6-2-4.8.5-9.4 3.8-9.4 6.7 0 3 3.6 5.3 7.5 4.8 3.6-.4 4.7.5 1.9 1.6-2.9 1.1-7.9.6-10.2-1-1.6-1.1-2.2-2.5-2.2-5 0-8.8 12.9-13 25.4-8.4 16.5 6.2 18.1 26.2 3 35.7-2.4 1.6-4.4 3.2-4.4 3.7 0 1.7 6.6-.5 11-3.6 15.1-10.7 15.6-11 19.1-10.6l3.4.4-2.7 1.3c-4 2-3.4 3.1 1.6 3.1 4 0 4.5-.3 5.5-3.1 1.5-4.4 1.4-15.3-.3-19.2C75.5 17.6 66 9.8 58.8 7.1c-6.1-2.2-19.7-3.6-24.3-2.5z" />
    <Path d="M67 47.9c-3 1-8.2 3.1-11.5 4.7-5.1 2.5-7.3 2.9-14.5 3-14.2.2-17 .4-17 1.2 0 2.8 17.2 4.9 26.5 3.3C60.4 58.4 74 50.8 74 47c0-1.3-.4-1.2-7 .9z" />
  </Svg>
);

export default Logo;
