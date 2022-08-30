import { createGlobalState } from 'react-hooks-global-state'

const initialState = {
  token: '',
  currentUser: null
}
export const { useGlobalState } = createGlobalState(initialState)
