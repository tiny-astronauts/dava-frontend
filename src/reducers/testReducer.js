export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'ACTION':
      return {
        ...state
      }
    default:
      return state
  }
}
