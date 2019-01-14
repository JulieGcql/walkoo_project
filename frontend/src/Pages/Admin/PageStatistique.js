import React from 'react'
import AdminNav from '../../components/BackOffice/AdminNav/AdminNav'
import AdminMenu from '../../components/BackOffice/AdminMenu/AdminMenu';
import AdminStatistiques from '../../components/BackOffice/AdminStatistiques/AdminStatistiques';

const PageStatistique = () => {
  return (
    <div>
      <AdminNav/>
      <AdminMenu/>
      <AdminStatistiques/>
    </div>
  )
}

export default PageStatistique
