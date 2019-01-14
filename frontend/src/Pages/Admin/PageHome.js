import React from 'react'
import AdminNav from '../../components/BackOffice/AdminNav/AdminNav'
import AdminMenu from '../../components/BackOffice/AdminMenu/AdminMenu';
import AdminAccueil from '../../components/BackOffice/AdminAccueil/AdminAccueil';

const PageHome = () => {
  return (
    <div>
      <AdminNav/>
      <AdminMenu/>
      <AdminAccueil/>
    </div>
  )
}

export default PageHome
