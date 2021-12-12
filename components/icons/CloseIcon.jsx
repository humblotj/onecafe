import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

/* 
엑스포 프로젝트에서 SVG 이미지를 사용하는 방법:
- 프로젝트에 리엑트-네이티브-SVG를 추가합니다.
- SVG 사진을 찾거나 사진을 SVG로 변환합니다(변환을 위한 웹 사이트가 존재합니다.)
- 다음 웹 사이트를 통해 SVG 파일을 응답 구성 요소로 변환합니다. https://react-svgr.com/playground/?sbg=true

SVG 사진을 사용하는 이유
- SVG 사진은 픽셀 기반의 png, jpg 사진과 달리 벡터 기반의 사진입니다...
- 사진의 크기를 어떻게 설정하든 파일 크기를 변경하지 않으면 픽셀 단위로 깨지지 않습니다.
- 그러나 복잡한 구조의 SVG 사진을 사용하기는 어렵습니다.
- 따라서 SVG는 로고/아이콘 사진에 이상적입니다.
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
