import ReactVLibras from '@djpfs/react-vlibras';
import Header from '../components/header/header.jsx'
import Banner from '../components/banner/Banner.jsx'
import Introduction from '../components/introduction/Introduction.jsx'
import Address from '../components/Address/Address.jsx'
import JobService from '../components/JobService/JobService.jsx'
import Comments from '../components/comments/Comments.jsx'
import SocialMidia from '../components/social_midia/SocialMidia.jsx'
import Footer from '../components/Footer/Footer.jsx'

function Index() {

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
      <ReactVLibras forceOnload={true} />
    </>
  )
}

export default Index
