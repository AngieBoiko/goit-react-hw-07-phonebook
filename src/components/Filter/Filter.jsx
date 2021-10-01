import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/actions';
import { getFilter } from '../../redux/selectors';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <div className={s.filterWrapper}>
      <label className={s.filterLabel}>
        Find contacts by name
        <input
          className={s.filterInput}
          type="text"
          name="filter"
          value={value}
          onChange={e => dispatch(filterContact(e.target.value))}
        ></input>
      </label>
    </div>
  );
}
