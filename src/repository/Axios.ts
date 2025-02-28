import _axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface ApiErrorRs<T extends string = string> {
  code: T;
  errors: unknown[];
  httpStatus: string;
  message: string;
}

// TODO : axios baseURL 설정
const getBaseUrl = (env: typeof process.env.NEXT_PUBLIC_ENV) => {
  switch (env) {
    case 'staging':
      return 'st';
    case 'staging2':
      return 'st2';
    case 'production':
      return 'pr';
    case 'development':
      return 'dv';
  }
};

export const developmentEnv = process?.env?.NEXT_PUBLIC_ENV || 'development';
const baseURL = process?.env?.NEXT_PUBLIC_HOST_DOMAIN ?? getBaseUrl(developmentEnv);

export class RequestClient {
  private axiosInstance!: AxiosInstance;
  private callbackQueue: (() => void)[] = []; //토큰이 만료되어 실패한 요청(콜백 함수)들을 저장.
  //토큰 갱신중 판별
  private get isRefreshing() {
    return this.callbackQueue.length > 0;
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
    if (!e.response || !e.config) return Promise.reject(e);
    // 공통 authError 판별
    const { data, status } = e.response;
    const code = data.code;

    // 401에러처리
    if (status === 401) {
      // 에러코드 정의되면 작성
      // if ('NO_ACCESSTOKEN' === code || 'REFRESH_TOKEN_EXPIRED' === code) {
      //   await deleteToken();
      //   return Promise.reject(e);
      // }
      // accessToken 재발급
      if (!this.isRefreshing) return this.onRefreshAccessToken(e.config);
      return this.registerCallback(e.config);
    }

    return Promise.reject(e);
  }

  private async onRefreshAccessToken(requestConfig: AxiosRequestConfig): Promise<AxiosResponse> {
    // 실패한 요청을 콜백함수로 등록
    const promise = this.registerCallback(requestConfig);

    //TODO : accessToken 재발급 api 작성
    try {
      // const res = await getAuthAccessToken();
      // setAccessToken(res.accessToken);
      // setAxiosHeader('Authorization', res.accessToken);
      this.retryCallbackQueue();
    } catch (e) {
      // deleteToken();
    }

    return promise;
  }

  // accessToken 재발급 완료시 실행
  private retryCallbackQueue() {
    this.callbackQueue.forEach((v) => v());
    this.callbackQueue.splice(0);
  }

  // 콜백함수 추가
  private enqueueCallback(cb: () => void) {
    this.callbackQueue.push(cb);
  }

  // 새로운 토큰 설정
  private applyNewTokenToRequest(requestConfig: AxiosRequestConfig) {
    if (requestConfig.headers) {
      requestConfig.headers.Authorization = this.axios.defaults.headers.common.Authorization;
    }
  }

  // 콜백함수 등록
  private registerCallback(requestConfig: AxiosRequestConfig) {
    return new Promise<AxiosResponse>((resolve) => {
      this.enqueueCallback(() => {
        this.applyNewTokenToRequest(requestConfig);
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
