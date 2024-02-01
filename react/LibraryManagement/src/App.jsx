import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookCards from './components/Bookcard'
import Books from './pages/Books'
import Product from './pages/Products'
import ProductCard from './components/Productscard'
import Car from './pages/Car'
import CarCard from './components/Carcard'



function App() {
  const [count, setCount] = useState(0)

  // console.log(BooksArray);

  return (
    <>
        <div>
          <Books />
          {/* <Product /> */}
          {/* <Car /> */}
        </div>
    </>
  )
}

export default App
