import foto from '../assets/foto.png'
import '../styles/Header.css'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Header() {
  return (
    <div className='header-jumbotron'>
      <img src={foto}></img>
      <h3>Akmalurrizqi Fudzni</h3>
      <p>Programer - Data Analyst - Researcher</p>
    <div className='socialMedia'>
        <a href=''><FaInstagramSquare/></a>
        <a href=''><FaFacebook/> </a>
        <a href=''><FaTiktok /> </a>
        <a href=''><FaWhatsapp /> </a>
    </div>
</div>
  )
}

export default Header
