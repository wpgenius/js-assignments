import { Menu, Search, Instagram, Twitter, Facebook, Rss, Mail } from "react-feather"
import "./Navbar.css"

function Navbar() {
  return (
    <div>
    <div className="navbar">
      <div className="right">
        <li><Menu /></li>
        <li><Search /></li>
      </div>
      <h1>JOHN</h1>
      <div className="left">
        <li><Facebook /></li>
        <li><Twitter /></li>
        <li><Instagram /></li>
        <li><Rss /></li>
        <li><Mail /></li>
      </div>

    </div>
      <div className="bottom">
        <li><a href="/">Home</a></li>
        <li><a href="#">Posts</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Lifestyle</a></li>
        <li><a href="#">Movies</a></li>
        <li><a href="#">Books</a></li>
        <li><a href="#">Music</a></li>
        <li><a href="#">Contact</a></li>
      </div>
    </div>
  )
}

export default Navbar;
