/* eslint-disable @typescript-eslint/no-require-imports */
const { generateApi } = require('swagger-typescript-api');
const path = require('path');

generateApi({
  output: path.resolve(process.cwd(), './swagger/res'), // 출력 디렉터리 설정
  url: 'https://api-jobda-im.kr-dv-jainwon.com/v3/api-docs/MATCHING%20API', // Swagger JSON URL
  httpClientType: 'axios', // HTTP 클라이언트로 axios 사용
  modular: true, // 모듈식 파일 구조 활성화
  templates: path.resolve(process.cwd(), './swagger/templates'), // 수정된 템플릿 경로
  generateClient: true, // API 클라이언트 코드 생성 비활성화
  generateResponses: true, // 응답에 대한 추가 정보 생성 비활성화
  extractEnums: true, // Enum 타입 추출 활성화
  // extractRequestBody: true, // 요청 본문 타입 추출 활성화
  // extractResponseError: true, // 응답 에러 타입 추출 활성화
});
