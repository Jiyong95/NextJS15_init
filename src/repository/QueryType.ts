import { UseQueryOptions } from '@tanstack/react-query';

export interface CUSTOM_QUERY_OPTIONS<T> extends Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn'> {}
