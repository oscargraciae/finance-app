import Head from 'next/head'
import React from 'react'

export const HeadMeta = ({ title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
    </>
  )
}
