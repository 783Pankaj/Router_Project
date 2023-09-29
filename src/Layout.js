import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <>
    <Header />
     <Outlet />   {/* Header and footer will same. only inske bich ke value change hoga.. yadi OutLet Header ke upper dete uper ki value change hote*/}
    <Footer />
   </>
  )
}

export default Layout   