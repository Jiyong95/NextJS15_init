import { axios } from '@repository/axios';
import { AdsMainBannerListRs } from './rqrs/AdsMainBanner';

export const AdsRepo = {
  fetchAdsMainBanners: async () => {
    const { data } = await axios.get<AdsMainBannerListRs>('/ads/main-banners');
    return data;
  },
};
