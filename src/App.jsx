import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieList from './pages/MovieList'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Dashboard from './pages/dashboard/Dashboard'
import EditMovie from './pages/dashboard/EditMovie'
import AddMovie from './pages/dashboard/AddMovie'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MovieList />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/dashboard/add' element={<AddMovie />}></Route>
        <Route path='/dashboard/edit/:slug' element={<EditMovie />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App