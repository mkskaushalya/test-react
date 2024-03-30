import "./Header.css";
import logo from "../logo.svg";

export default function Header() {
  return (
    <header className="App-header">
        <div className="left">
            <img src={logo} alt="logo" />
            <h1>My Website</h1>
        </div>
        <div className="right">
            <a href="#root">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
        </div>
    </header>
  );
}