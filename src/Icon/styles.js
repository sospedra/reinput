import { BASE_UNIT } from '../services/constants'

const ICON_SIZE = BASE_UNIT * 6

export const icon = {
  alignItems: 'center',
  height: ICON_SIZE,
  justifyContent: 'center',
  width: ICON_SIZE
}

export const overlay = (paddingBottom) => ({
  marginTop: paddingBottom, /* adjust negative bottom margin */
  position: 'absolute',
  right: 0
})
