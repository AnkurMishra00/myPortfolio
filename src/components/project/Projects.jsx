import React from "react";
import styled from "styled-components";
export default function Projects() {
  const ProjectContainer = styled.div`
    letter-spacing: 1px;
    display: grid;
    margin-top: 6%;
    color: #d3e0ea;
    & h3 {
      letter-spacing: 1px;
      line-height: 1.5;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      margin-top: 16%;
    }
    & > p {
      font-size: 22px;
    }
  `;
  const Project = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 1%;
    box-shadow: 2px 2px 5px 1px #d8e3e7;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    & > img {
      margin: auto;
      height: 80%;
      width: 500px;
      border-radius: 5px;
      transition: transform 0.4s;
      &:hover {
        -ms-transform: scale(1.05);
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
      }

      @media (max-width: 768px) {
        width: 90%;
        margin: 20px auto;
      }
    }
    & > div {
      height: 80%;
      width: 50%;
      border-radius: 5px;
      transition: transform 0.4s;
      padding-bottom: 0.5%;
      &:hover {
        -ms-transform: scale(1.05);
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
      }

      @media (max-width: 768px) {
        width: 90%;
        margin: auto;
      }
    }
    & > div > p {
      width: 80%;
      margin: 2% auto;
      color: #d3e0ea;
      letter-spacing: 1px;
      line-height: 1.5;
      @media (max-width: 768px) {
        width: 90%;
      }
    }
  `;

  return (
    <ProjectContainer id="project">
      <p> Projects which I worked on are...</p>
      <Project>
        <div>
          {" "}
          <h3>DESERTCART (E-commorce)</h3>
          <p>
            This project is a complete clone UI of the Desertcart website with the
            functionalities of searching a product and purchase  a
            particular product. 
            For the frontend we have used html css.
          </p>
          <p>TECH STACK :-</p>
          <p>React | MongoDB| HTML | CSS</p>
          <a
            class="a-l"
            href="https://github.com/vsrathod39/desertcart.in_clone.io.git"
            target="_blank"
          >
            VISIT GIT REPO...
          </a>
         
        </div>
        <img
          src="https://cdn.desertcart.com/cms-media/shop_women_perfume_online_777169b8dd.jpg?95355.45000000001"
          alt="home"
        ></img>
         <a  href="https://desertcart-clone.vercel.app/"><h1>LIVE</h1></a>
      </Project>
      <Project>
        <div>
          <h3>FITMEAL</h3>
          <p>
            Fitmeal.com awareness about the importance of eating well and to improve your
             relationship with food. The relationship between food and the human body is 
             so intense yet ignored by everybody that often results in neglected health and
              ultimately health related problems.
          </p>

          <p>TECH STACK :-</p>
          <p>
            JavaScript | MongoDB | Express | MVC Model | Node Js | HTML | CSS
          </p>

          {/* <Redirect> visit repo</Redirect> */}
          <a
            class="a-l"
            href="https://github.com/AnkurMishra00/fitmeal-clone.git"
            target="_blank"
          >
            VISIT GIT REPO...
          </a>
        </div>
        <img
          src="https://www.fitmeals.co.in/wp-content/uploads/2019/10/woman-1979272_1920.jpg"
          alt="home"
        ></img>
        <a  href="https://keen-brown-9017f0.netlify.app/"><h1>LIVE</h1></a>
        
      </Project>
    </ProjectContainer>
  );
}
