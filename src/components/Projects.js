import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/World-Time.png";
import projImg2 from "../assets/img/Maderia.png";
import projImg3 from "../assets/img/Hotel-Management.png";
import projImg4 from "../assets/img/Supermarket-mngmnt.png";
import projImg5 from "../assets/img/info.png";
import projImg6 from "../assets/img/SDBD.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "World time app",
      description: "World time app that tells the time in different cities around the world",
      imgUrl: projImg1,
      link: "https://github.com/Miki-b/World-time-app",
    },
    {
      title: "Maderia",
      description: "Room booking app",
      imgUrl: projImg2,
      link: "https://github.com/Miki-b/Room-Reservation-App",
    },
    {
      title: "Hotel Management System",
      description: "Hotel management system, booking app for hotels",
      imgUrl: projImg3,
      link: "https://github.com/Miki-b/EDP",
    },
    {
      title: "Supermarket Management System",
      description: "Designed to manage supermarket goods, supply, and sales",
      imgUrl: projImg4,
      link: "https://github.com/Miki-b/Supermarket-management-system",
    },
    {
      title: "Information Retrieval System",
      description: "Information retrieval system for Amharic books and articles",
      imgUrl: projImg5,
      link: "https://github.com/Miki-b/IR-system-for-Amharic",
    },
    {
      title: "Database Design",
      description: "Design of a database for a supermarket",
      imgUrl: projImg6,
      link: "https://github.com/Miki-b/Supermarket-Database_design",
    },
  ];
  
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                {
                   }
                
                      <Row>{
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
            
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}
