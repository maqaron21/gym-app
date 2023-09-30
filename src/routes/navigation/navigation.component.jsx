import { useContext } from "react";
import { MenuContext } from "../../contexts/menu.context";
import "./navigation.styles.scss";
import { Link, Outlet } from "react-router-dom";


const NavigationMenu = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  const handleMouseOn = ()=> setIsMenuOpen(true);
  const handleMouseOut = ()=> setIsMenuOpen(false);

  return (
    <>
      <div className={`nav-container ${isMenuOpen ? "active" : ""}`} onMouseLeave={handleMouseOut} onMouseEnter={handleMouseOn}>
        <div className="nav-shadow"></div>
        <div className="burger-menu" >
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="nav-list">
          <ul>
            <li><Link to="/training-sessions">Training Sessions</Link></li>
            <li><Link to="/">Exercises</Link></li>
            <li><Link to="/">Your Results</Link></li>
            <li><Link to="/">Your Profile</Link></li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationMenu;
