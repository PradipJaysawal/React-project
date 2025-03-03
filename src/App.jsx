import About from './components/About'
import EventContainer from './components/EventContainer'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ProducutContainer from './components/productcontainer'
import ServiceContainer from './components/ServiceContainer'
import TopBar from './components/TopBar'

function App() {
  

  return (
    <>
      <TopBar/>
      <Navbar/>
      <ProducutContainer />
      <ServiceContainer />
      <EventContainer />
      <About/>
      <Footer/>
    </>
  )
}

export default App

