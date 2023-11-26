import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Project from './Project'
import ShowAllProductsUsingRtk from './ShowAllProductsUsingRtk'

const MyRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path = "/" element = {<ShowAllProductsUsingRtk></ShowAllProductsUsingRtk>}> </Route>
            
        </Routes>
    </div>
  )
}

export default MyRoutes