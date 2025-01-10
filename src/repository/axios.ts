import _axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getAccessToken } from '@utils/hook/useAccessToken';

interface ApiErrorRs<T extends string = string> {
  code: T;
  errors: unknown[];
  httpStatus: string;
  message: string;
}

// axios baseURL 설정
const getBaseUrl = (env: typeof process.env.NEXT_PUBLIC_ENV) => {
  switch (env) {
    case 'development':
      return 'https://api-matching-curation.ats.kr-dv-jainwon.com';
    case 'staging':
      return 'https://api-matching-curation.ats.kr-st-jainwon.com';
    case 'staging2':
      return 'https://api-matching-curation.ats.kr-st2-jainwon.com';
    case 'production':
      return 'https://api-matching-curation.ats.kr-pr-jainwon.com';
  }
};

export const developmentEnv = process?.env?.NEXT_PUBLIC_ENV || 'development';
const baseURL = process?.env?.NEXT_PUBLIC_HOST_DOMAIN ?? getBaseUrl(developmentEnv);

export class RequestClient {
  private axiosInstance!: AxiosInstance;
  private callbackArray: (() => void)[] = []; //토큰이 만료되어 실패한 요청(콜백 함수)들을 저장.
  //토큰 갱신 판별
  private get isRefreshing() {
    return this.callbackArray.length > 0;
  }

  constructor() {
    this.init();
  }

  get axios() {
    return this.axiosInstance;
  }

  private init() {
    this.axiosInstance = _axios.create({ baseURL });
    this.axios.defaults.paramsSerializer = this.defaultParamsSerializer;
    this.setResponseInterceptor();
  }

  // query param format으로 변환하는 함수
  // 기본 axios param format = a[]=1&a[]=2 => a=1,2 로 변환
  private defaultParamsSerializer(paramObj: Record<string, any>) {
    const params = new URLSearchParams();
    Object.entries(paramObj)
      .filter(([_, value]) => value !== undefined)
      .forEach(([key, value]) => {
        params.append(key, value);
      });

    return params.toString();
  }

  // 응답 인터셉터 설정
  private setResponseInterceptor() {
    this.axiosInstance.interceptors.response.use(
      //응답 성공
      (response) => response,
      // 에러
      (e: AxiosError<ApiErrorRs>) => {
        this.formatErrorResponse(e);
      },
    );
  }

  // 에러 처리
  private async formatErrorResponse(e: AxiosError<ApiErrorRs>): Promise<Error | AxiosResponse> {
    if (!e.response) return Promise.reject(e);
    // 공통 authError 판별
    const { data, status } = e.response;
    const code = data.code;

    // 401에러처리
    if (status === 401) {
      // 에러코드 정의되면 작성

      // switch(code) {
      //   //accessToken이 만료된 경우
      //   case 'AUTH_TOKEN_EXPIRED':
      //     return this.onRefreshAccessToken(e.config);
      //   //refreshToken이 만료된 경우
      //   case 'REFRESH_TOKEN_EXPIRED':
      //     await deleteToken();
      //     return Promise.reject(e);
      // }

      // accessToken 재발급
      return this.onRefreshAccessToken(e.config);
    }

    return Promise.reject(e);
  }

  private async onRefreshAccessToken(requestConfig?: AxiosRequestConfig): Promise<AxiosResponse> {
    if (!requestConfig) return Promise.reject('requestConfig is undefined');

    if (!this.isRefreshing) {
      // accessToken 재발급 api 작성
      // const res = await getAuthAccessToken();
      // setAccessToken(res.accessToken);
      this.onAccessTokenRefreshEnd();
      return this.registerRetryOnTokenRefresh(requestConfig);
    }

    return this.registerRetryOnTokenRefresh(requestConfig);
  }

  // accessToken 재발급 완료시 실행
  private onAccessTokenRefreshEnd() {
    this.callbackArray.forEach((v) => v());
    this.callbackArray.splice(0);
  }

  private appendAccessTokenRefreshSubscriber(subscriber: () => void) {
    this.callbackArray.push(subscriber);
  }

  private refreshExpiredTokenRequest(requestConfig: AxiosRequestConfig) {
    if (requestConfig.headers) {
      requestConfig.headers.Authorization = `Bearer ${getAccessToken()}`;
    }
  }

  // 콜백함수 등록
  private registerRetryOnTokenRefresh(requestConfig: AxiosRequestConfig) {
    return new Promise<AxiosResponse>((resolve) => {
      this.appendAccessTokenRefreshSubscriber(() => {
        this.refreshExpiredTokenRequest(requestConfig);
        resolve(this.axios.request(requestConfig));
      });
    });
  }
}

export const setAxiosHeader = (key: string = 'Authorization', value: string) => {
  axios.defaults.headers.common[key] = value;
};

const axios = new RequestClient().axios;

export { axios };
