import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Portofolio from '../components/Portofolio'
import About from '../components/About';
import Footer from '../components/Footer';
function Home() {
 
    return (
      <>   
  <Navbar/>
        <header>
          
          <Header />
        </header>
  
        <main>
          <Portofolio />
          <About />
          <Footer />
          {/* <Experience />  */}
        </main>
      </>
    );
  }
  
export default Home
