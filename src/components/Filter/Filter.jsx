import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/actions';
import { getFilter } from 'redux/selectors';
import { getLoadingStatus } from 'redux/selectors';
import Spinner from 'components/Loader/Loader';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const loading = useSelector(getLoadingStatus);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className={s.filterWrapper}>
      <label className={s.filterLabel}>
        Find contacts by name
        <input
          className={s.filterInput}
          type="text"
          name="filter"
          value={value}
          onChange={e => dispatch(filterContacts(e.target.value))}
        ></input>
      </label>
    </div>
  );
}
