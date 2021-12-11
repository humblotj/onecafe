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

const HomeIcon = (props) => (
  <Svg
    viewBox="64 64 896 896"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <Path d="M946.5 505 560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
  </Svg>
);

export default HomeIcon;
