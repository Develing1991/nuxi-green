export type SnapAlign = 'start' | 'end' | 'center' | 'center-even' | 'center-odd'

export type Dir = 'rtl' | 'ltr'
export interface ICarousel {
  itemsToShow?: number //
  itemsToScroll?: number //
  modelValue?: number
  transition?: number
  throttle?: number
  autoplay?: number
  snapAlign?: SnapAlign //
  wrapAround?: boolean
  pauseAutoplayOnHover?: boolean
  mouseDrag?: boolean
  touchDrag?: boolean
  dir?: Dir
  breakpoints?: Record<string, any>
  settings?: Record<string, any>
  hasNavi?: boolean
  hasPage?: boolean
  items?: number[] // object[]
}
export interface ITest {
  name?: string
}
