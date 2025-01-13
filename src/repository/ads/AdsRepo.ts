import { axios } from '@repository/axios';
import { AdsMainBannerListRs } from './types/AdsMainBanner';

export const AdsRepo = {
  fetchAdsMainBanners: async () => {
    const { data } = await axios.get<AdsMainBannerListRs>('/ads/main-banners');
    return data;
  },
};
