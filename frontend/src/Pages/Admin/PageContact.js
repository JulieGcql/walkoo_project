import React from 'react'
import AdminNav from '../../components/BackOffice/AdminNav/AdminNav'
import AdminMenu from '../../components/BackOffice/AdminMenu/AdminMenu';
import AdminContacts from '../../components/BackOffice/AdminContacts/AdminContacts';

const PageContact = () => {
  return (
    <div>
      <AdminNav/>
      <AdminMenu/>
      <AdminContacts/>
    </div>
  )
}

export default PageContact
