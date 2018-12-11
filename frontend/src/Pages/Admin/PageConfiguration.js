import React from 'react'
import AdminNav from '../../components/AdminNav/AdminNav'
import AdminMenu from '../../components/AdminMenu/AdminMenu';
import AdminConfigurations from '../../components/AdminConfigurations/AdminConfigurations';

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
