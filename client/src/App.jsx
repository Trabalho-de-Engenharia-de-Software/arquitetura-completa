import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Banner from './components/banner/banner'
import Introduction from './components/introduction/Introduction'
import Address from './components/Address/Address.jsx'
import JobService from './components/JobService/JobService.jsx'
import Comments from './components/comments/Comments.jsx'
import SocialMidia from './components/social_midia/SocialMidia.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />
      <Introduction />
      <Address />
      <JobService />
      <Comments />
      <SocialMidia />
      <Footer />
    </>
  )
}

export default App
