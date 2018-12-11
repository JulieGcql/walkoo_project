import React from 'react'
import AdminNav from '../../components/BackOffice/AdminNav/AdminNav'
import AdminMenu from '../../components/BackOffice/AdminMenu/AdminMenu';
import AdminArticles from '../../components/BackOffice/AdminArticles/AdminArticles';

const PageArticle = () => {
  return (
    <div>
      <AdminNav/>
      <AdminMenu/>
      <AdminArticles/>
    </div>
  )
}

export default PageArticle
