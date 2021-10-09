import { createSelector } from 'reselect';
export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getLoadingStatus = state => state.contacts.loading;
export const getVisibleContacts = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    return items.filter(({ name }) => name.toLowerCase().includes(filter));
  },
);
