import React from 'react'
import Header from './segments/Header'
import ShopByCategory from './segments/ShopByCategory'
import BasicStarterPack from './segments/BasicStarterPack'


export const LandingPage = () => {
  return (
    <div className="md:w-screen  w-[450px]">
      <Header/>
      <ShopByCategory/>
      <BasicStarterPack/>  

    </div>
  )
}
