import Navbar from "./components/navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Projects from "./components/project/Projects";

import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
function App() {
  return (
    <>
      <div className="App">
        <Portfolio />
      </div>
    </>
  );
}

export default App;
