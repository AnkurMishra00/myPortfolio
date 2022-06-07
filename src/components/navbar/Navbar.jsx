import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";
export default function Navbar() {
  const Nav = styled.div`
    height: 47px;
    letter-spacing: 1px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: auto;
    background: #132c33;
    text-aligh: center;
    text-decoration: none;
    position: fixed;
    font-size: 22px;
    box-shadow: 2px 2px 5px 0.8px #d8e3e7;
    @media (max-width: 768px) {
      font-size: 18px;
    }
    @media (max-width: 420px) {
      font-size: 10px;
    }
  `;
  return (
    <Nav>
      <a className="link" href='#about'> About Me</a>
      <a className="link" href='#project'>Project</a>
      <a className="link" href='#skills'> Skills</a>
      <a className="link" href='#contact'>Contact</a>
    </Nav>
  );
}
