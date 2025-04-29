import '../styles/About.css'
import { FaHtml5 } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";


function About() {
  return (
   <section id='about'>
    <div className='wrapper'>
      <h3>ABOUT</h3>
      <p>Saya adalah seorang programmer, data analyst, dan researcher yang berfokus pada pemanfaatan data untuk mengembangkan solusi inovatif.
         Berpengalaman dalam membangun aplikasi, menganalisis data kompleks, serta melakukan riset berbasis teknologi, 
         saya percaya bahwa data bukan hanya angka melainkan dasar untuk pengambilan keputusan yang lebih cerdas.
         Dengan latar belakang di INFORMATIKA UNIVERSITAS AHMAD DAHLAN, 
         </p><p>
      saya terbiasa bekerja dengan berbagai bahasa pemrograman seperti Python, SQL,serta tools analisis seperti Tableau dan Power BI. 
      Saya juga aktif dalam penelitian bidang social data,bisnis berbasis data dengan menggabungkan teori dan praktik untuk menghasilkan insight yang aplikatif.
      Saya terbuka untuk kolaborasi, proyek freelance, atau peluang baru di dunia teknologi dan data.
      Mari terhubung!</p>
      <h4> Programing Language & Tools </h4>
      <div className='skills'>
      <FaHtml5 />
      <FaPhp />
      <FaReact />
      <PiFileSql />
      <FaCss3Alt />
      <FaBootstrap />
      <IoLogoJavascript />
      <FaDatabase />
      <FaPython />
      <IoMdAnalytics />
      <FaGithub />
      <SiVite />
      <FaBrain />
      <IoMdDocument />



      </div>



    </div>
   </section>
  )
}

export default About
