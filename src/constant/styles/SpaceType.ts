export enum SpaceType {
  NONE = 'NONE',
  XXXXS = 'XXXXS',
  XXXS = 'XXXS',
  XXS = 'XXS',
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL',
  XXXL = 'XXXL',
  XXXXL = 'XXXXL',
}

export const Space: Record<SpaceType, number> = {
  NONE: 0,
  XXXXS: 2,
  XXXS: 4,
  XXS: 6,
  XS: 8,
  S: 10,
  M: 12,
  L: 16,
  XL: 24,
  XXL: 32,
  XXXL: 40,
  XXXXL: 48,
};
