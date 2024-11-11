import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Banner from './components/banner/banner'
import Introduction from './components/introduction/Introduction'
import Address from './components/Address/Address.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />
      <Introduction />
      <Address />
    </>
  )
}

export default App
