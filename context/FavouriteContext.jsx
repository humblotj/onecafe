import { createContext } from 'react';

/* 
컨텍스트 정의하기
이 컨텍스트는 Favourite를 정의하고 Favourite의 메소드 값을 설정합니다.
공급자의 값 속성에서 컨텍스트 값을 설정합니다. --> App.js 확인
 */
export default createContext({ favourite: '', setFavourite: () => {} });
