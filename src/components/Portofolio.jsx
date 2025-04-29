import '../styles/Portofolio.css'
import { portofoliolist } from '../data/DataPortofolio';
import { Link } from 'react-router-dom';
function Portofolio() {
    return (
      <section id="portofolio"> 
      <div className="wrapper">
        <h3>Portofolio</h3>
        <div className="grid">
          {
            portofoliolist.map((item)=>{
              return(

                <div className="item" key={item.id}>
            
            <Link to ={`/portofolio/${item.id}`}><img src={item.Image} /></Link>           
          </div>
         
              )
            })
          }

          
        </div>
      </div>
      </section>
    );
  }
  
  export default Portofolio;
  