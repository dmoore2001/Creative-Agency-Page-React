import React from 'react'

import { Helmet } from 'react-helmet'

import './page-2.css'

const Page2 = (props) => {
  return (
    <div className="page2-container">
      <Helmet>
        <title>Page-2 - Creative Agency Page</title>
        <meta property="og:title" content="Page-2 - Creative Agency Page" />
      </Helmet>
    </div>
  )
}

export default Page2
