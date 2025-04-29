import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";
import { FaFigma } from "react-icons/fa";
import { MdDataExploration } from "react-icons/md";
import Navbar from './Navbar';
import Footer from './Footer';



function Experience() {
  return (
   <>
   <Navbar/>
   <div className='wrapper'>
    <h1>experience</h1>
   </div>
   <VerticalTimeline>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2023 - Sekarang"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaReact />}
  >
    <h3 className="vertical-timeline-element-title">Front End Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Universitas Ahmad Dahlan</h4>
    <p>
    Performance Optimization,Microinteractions,
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2022 - sekarang"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdDataExploration />}
   
  >
    <h3 className="vertical-timeline-element-title">Data Analyst</h3>
    <h4 className="vertical-timeline-element-subtitle">Universitas Ahmad Dahlan</h4>
    <p>
    Data Cleaning Skills,Descriptive Analytics,Python for Data Analysis,Data Storytelling,A/B Testing and Experiment Design
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2022 - 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<RiNextjsFill />}
  >
    <h3 className="vertical-timeline-element-title">Front End Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Universitas Ahmad Dahlan</h4>
    <p>
      design kreatif,Progressive Web App,Accessibility (A11Y)
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2022 - 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<DiCodeigniter />}
    
  >
    <h3 className="vertical-timeline-element-title">Front End Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Universitas Ahmad Dahlan</h4>
    <p>
    Design System & Component Library
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2021 - 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaFigma />}
   
  >
    <h3 className="vertical-timeline-element-title">Design UI</h3>
    <h4 className="vertical-timeline-element-subtitle">Universitas Ahmad Dahlan</h4>
    <p>
    Mobile-First Design,Responsive Design Principles,Visual Storytelling
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2021 - 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaPhp />}
  >
    <h3 className="vertical-timeline-element-title"> PHP Native</h3>
    <h4 className="vertical-timeline-element-subtitle">Universitas Ahmad Dahlan</h4>
    <p>
      website statis,
    </p>
  </VerticalTimelineElement>
   </VerticalTimeline>

   <Footer/>
   </>
  )
}

export default Experience
