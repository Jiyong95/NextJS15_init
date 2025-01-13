import { useMutation, useQuery } from '@tanstack/react-query';
import { AdsRepo } from './AdsRepo';
import { AdsMainBannerListRs } from './types/AdsMainBanner';
import { CUSTOM_QUERY_OPTIONS } from '@repository/Types';

export function useAdsMainBanners(options?: CUSTOM_QUERY_OPTIONS<AdsMainBannerListRs>) {
  return useQuery({
    queryKey: ['ads'],
    queryFn: AdsRepo.fetchAdsMainBanners,
    ...options,
  });
}

export function useAdsMainBanners2() {
  return useMutation<AdsMainBannerListRs>({
    mutationFn: AdsRepo.fetchAdsMainBanners,
  });
}
