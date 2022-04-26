import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"

import IndexPage from './pages/index'
import AboutPage from './pages/about'
import CocktailPage from './pages/cocktail'
import ContactPage from './pages/contact'


import './App.css'


const App = () => {
  return (
    <main className="App">
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path='/' element={ <IndexPage /> } />
          <Route path='/about' element={ <AboutPage /> } />
          <Route path='/cocktail/:id' element={ <CocktailPage /> } />
          <Route path='/contact' element={ <ContactPage /> } />
        </Routes>
        
      </BrowserRouter>
    </main>
  )
}

export default App
