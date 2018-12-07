import React from 'react'
import AdminNav from '../../components/AdminNav/AdminNav'
import AdminMenu from '../../components/AdminMenu/AdminMenu';
import AdminArticles from '../../components/AdminArticles/AdminArticles';

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
