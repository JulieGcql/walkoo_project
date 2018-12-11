import React from 'react'
import Media from 'react-media'
import LoginAdmin from '../../components/LoginAdmin/LoginAdmin'
import Indisponible from '../../components/Indisponible/Indisponible'

const PageLogin = () => {
  return (
    <div>
      <Media query="(max-width: 425px)">
      {matches =>
        matches ? (
          <Indisponible/>
          ) : (
          <LoginAdmin/>
          )
      }
    </Media>
    </div>
  )
}

export default PageLogin
