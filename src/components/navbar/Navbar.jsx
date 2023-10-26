import "./navbar.css"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-containerv">
        <span className="logo">JetSetGo</span>
        <div className="navItems">
          <button className="nav-buttons">Register</button>
          <button className="nav-buttons">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;