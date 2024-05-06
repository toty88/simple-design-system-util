/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ColorVariant, BorderVariant } from '@/types'
import * as tokens from '@/style-dictionary/colors'

// BackgroundColor
export const BackgroundColor: Record<ColorVariant, string> = {
  base: tokens.ColorBaseBkg,
  primary: tokens.ColorPrimaryBkg,
  success: tokens.ColorSuccessBkg,
  warn: tokens.ColorWarnBkg,
  error: tokens.ColorDangerBgk
}

// BorderColor
export const BorderColor: Record<ColorVariant, string> = {
  base: tokens.ColorBaseBorder,
  primary: tokens.ColorPrimaryBorder,
  success: tokens.ColorSuccessBorder,
  warn: tokens.ColorWarnBorder,
  error: tokens.ColorDangerBorder
}

// Hover && Disabled
export const DisabledColor: Record<ColorVariant, string> = {
  base: tokens.ColorBaseDisabled,
  primary: tokens.ColorPrimaryDisabled,
  success: tokens.ColorSuccessDisabled,
  warn: tokens.ColorWarnDisabled,
  error: tokens.ColorDangerDisabled
}

// 'xs' | 'sm' | 'md' | 'ml' | 'lg'

export const BorderSize: Record<BorderVariant, string> = {
  xs: tokens.BorderRadiusXm,
  sm: tokens.BorderRadiusSm,
  md: tokens.BorderRadiusMd,
  ml: tokens.BorderRadiusMl,
  lg: tokens.BorderRadiusLg
}

type ColorPaleteType = {
  backgroundColor: string
  borderColor: string
  disabledColor?: string
}

export function getColorSet(variant: ColorVariant): ColorPaleteType {
  return {
    backgroundColor: BackgroundColor[variant],
    borderColor: BorderColor[variant],
    disabledColor: DisabledColor[variant]
  }
}

export function getBorderSize(size: BorderVariant): string {
  return BorderSize[size]
}
