import { useMutation, useQuery } from '@tanstack/react-query';
import { AdsRepo } from './AdsRepo';
import { AdsMainBannerListRs } from './types/AdsMainBanner';
import { CUSTOM_QUERY_OPTIONS } from '@repository/Types';

export const useAdsMainBanners = (options?: CUSTOM_QUERY_OPTIONS<AdsMainBannerListRs>) => {
  return useQuery({
    queryKey: ['ads'],
    queryFn: AdsRepo.fetchAdsMainBanners,
    ...options,
  });
};

export const useAdsMainBanners2 = () => {
  return useMutation<AdsMainBannerListRs>({
    mutationFn: AdsRepo.fetchAdsMainBanners,
  });
};
