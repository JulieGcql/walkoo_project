import React from 'react'
import AdminNav from '../../components/AdminNav/AdminNav'
import AdminMenu from '../../components/AdminMenu/AdminMenu';
import AdminAccueil from '../../components/AdminAccueil/AdminAccueil';

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
