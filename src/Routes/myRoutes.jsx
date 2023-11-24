import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Project from './Project'

const MyRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path = "/" element = {<Project></Project>}> </Route>
            
        </Routes>
    </div>
  )
}

export default MyRoutes