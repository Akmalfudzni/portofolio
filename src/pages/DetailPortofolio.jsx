import { useParams,Navigate } from "react-router-dom"
import "../styles/Detailportofolio.css"
import { portofoliolist } from "../data/DataPortofolio";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function DetailPortofolio() {
    const {id} = useParams();
    const data = portofoliolist.find((item)=>item.id==id)
   if(data == undefined ){
    return <Navigate to='/pages-not-found'/>
   }
  
    return (
  <>
    <Navbar/>
    
       <section id="detail-portofolio">
        <div className="wrapper">
            <h1>{data.title}</h1>
            <img src={data.Image}  />
            <p className="skill"><b>Skills : {data.skill} </b></p>
        </div>
       </section>
     
    <Footer/>
    <ScrollToTop/>
    </>
  )
}

export default DetailPortofolio
