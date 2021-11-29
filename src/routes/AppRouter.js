import React from 'react'
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../components/Login'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'
import RoutesApp from './RoutesApp'
import Registro from '../components/Registro'

 const  AppRouter= () => {
   
      
    return (
        <BrowserRouter>

        <Routes>

        <Route path='*' element={
                                    <PrivateRouter>
                                        <RoutesApp/>
                                    </PrivateRouter>}/>
        </Routes>

        <Routes>
        <Route path='/login' element={<PublicRouter>
                                        <Login/>
                                    </PublicRouter>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default AppRouter