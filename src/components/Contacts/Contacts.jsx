import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/operations';
import { getVisibleContacts } from '../../redux/selectors';
import s from './Contacts.module.css';

export default function Contacts() {
  const contactsItem = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  if (contactsItem) {
    return (
      <ul className={s.contactsList}>
        {contactsItem.map(item => (
          <li key={item.id} className={s.contactsItem}>
            <p className={s.contactsText}>
              {item.name}: {item.number}
            </p>
            <button
              className={s.contactsBtn}
              type="button"
              onClick={() => dispatch(deleteContact(item.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
  return;
}
