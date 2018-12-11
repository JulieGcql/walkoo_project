import React from 'react'
import AdminNav from '../../components/BackOffice/AdminNav/AdminNav'
import AdminMenu from '../../components/BackOffice/AdminMenu/AdminMenu';
import AdminConfigurations from '../../components/BackOffice/AdminConfigurations/AdminConfigurations';

const PageConfiguration = () => {
  return (
    <div>
      <AdminNav/>
      <AdminMenu/>
      <AdminConfigurations/>
    </div>
  )
}

export default PageConfiguration
