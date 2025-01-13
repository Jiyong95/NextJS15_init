import { useMutation, useQuery } from '@tanstack/react-query';
import { AdsRepo } from './AdsRepo';
import { AdsMainBannerListRs } from './rqrs/AdsMainBanner';
import { CUSTOM_QUERY_OPTIONS } from '@repository/QueryType';

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
