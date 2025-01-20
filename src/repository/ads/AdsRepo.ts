import { axios } from '@repository/Axios';

import { AdsMainBannerListRs } from './rqrs/AdsMainBanner';

const AdsRepo = {
  fetchAdsMainBanners: async () => {
    const { data } = await axios.get<AdsMainBannerListRs>('/ads/main-banners');
    return data;
  },
};

export default AdsRepo;
