import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Footer2 } from "./components/Footer2";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Body />
      <Footer />
      <Footer2 />
    </div>
  );
}

export default App;
