export enum RadiusType {
  NONE = 'NONE',
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL',
  CIRCULAR = 'CIRCULAR',
}

export const Radius: Record<RadiusType, number> = {
  NONE: 0,
  XS: 2,
  S: 4,
  M: 8,
  L: 12,
  XL: 16,
  XXL: 24,
  CIRCULAR: 999999,
};
