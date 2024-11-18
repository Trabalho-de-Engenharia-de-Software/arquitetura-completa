import ReactVLibras from '@djpfs/react-vlibras';
import Header from '../components/IndexPage/header/header.jsx'
import Banner from '../components/IndexPage/banner/Banner.jsx'
import Introduction from '../components/IndexPage/introduction/Introduction.jsx'
import Address from '../components/IndexPage/Address/Address.jsx'
import JobService from '../components/IndexPage/JobService/JobService.jsx'
import Comments from '../components/IndexPage/comments/Comments.jsx'
import SocialMidia from '../components/IndexPage/social_midia/SocialMidia.jsx'
import Footer from '../components/IndexPage/Footer/Footer.jsx'

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
