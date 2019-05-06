export const label = (state = [], action) => {
  // (1)
  switch (
    action.type // (2)
  ) {
    case 'CHANGE_LABEL':
      return [...action.label];
    default:
      return state;
  }
};
