import { MILLISECONDS_PER_HOUR } from '@constant/Time';
import Cookies from 'js-cookie';

const AccessTokenExpireTime = 2 * MILLISECONDS_PER_HOUR; // 토큰 유지 시간 :  2시간

export default class CookieUtil {
  static setAccessToken = (accessToken: string) => {
    Cookies.set('accessToken', accessToken, {
      expires: new Date(Date.now() + AccessTokenExpireTime),
    });
  };
}
