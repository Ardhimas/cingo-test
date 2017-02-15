import {OPEN_BUTTON, CLOSE_BUTTON} from '../constants'

export function openButton() {
  return {
    type: OPEN_BUTTON
  }
}

export function closeButton() {
  return {
    type: CLOSE_BUTTON
  }
}
