/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ColorVariant, BorderVariant } from '@/types'
import * as tokens from '@/style-dictionary/colors'

// BackgroundColor
export const BackgroundColor: Record<ColorVariant, string> = {
  base: tokens.ColorBaseBkg,
  primary: tokens.ColorPrimaryBkg,
  success: tokens.ColorSuccessBkg,
  warn: tokens.ColorWarnBkg,
  error: tokens.ColorDangerBgk,
  chat: tokens.ColorChatBgk
}

// BorderColor
export const BorderColor: Record<ColorVariant, string> = {
  base: tokens.ColorBaseBorder,
  primary: tokens.ColorPrimaryBorder,
  success: tokens.ColorSuccessBorder,
  warn: tokens.ColorWarnBorder,
  error: tokens.ColorDangerBorder,
  chat: tokens.ColorChatBorder
}

// Hover && Disabled
export const DisabledColor: Record<ColorVariant, string> = {
  base: tokens.ColorBaseDisabled,
  primary: tokens.ColorPrimaryDisabled,
  success: tokens.ColorSuccessDisabled,
  warn: tokens.ColorWarnDisabled,
  error: tokens.ColorDangerDisabled,
  chat: tokens.ColorChatDisabled
}

// 'xs' | 'sm' | 'md' | 'ml' | 'lg'

export const BorderSize: Record<BorderVariant, string> = {
  xxs: tokens.BorderRadiusXxs,
  xs: tokens.BorderRadiusXs,
  sm: tokens.BorderRadiusSm,
  md: tokens.BorderRadiusMd,
  ml: tokens.BorderRadiusMl,
  lg: tokens.BorderRadiusLg
}

type ColorPaleteType = {
  backgroundColor: string
  borderColor: string
  disabledColor: string
  textColor: string
}

export function getColorSet(variant: ColorVariant): ColorPaleteType {
  return {
    backgroundColor: BackgroundColor[variant],
    borderColor: BorderColor[variant],
    disabledColor: DisabledColor[variant],
    textColor: tokens.ColorChatText
  }
}

export function getBorderSize(size: BorderVariant): string {
  return BorderSize[size]
}
