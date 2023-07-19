import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'

function Main() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Main