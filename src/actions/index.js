export const contactsFetched = contacts => ({
  type: 'FETCH_CONTACTS_SUCCESS',
  contacts,
});

export const changeLabel = label => ({
  type: 'CHANGE_LABEL',
  label,
});
