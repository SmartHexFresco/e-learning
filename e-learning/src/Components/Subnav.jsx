import { NavLink } from "react-router-dom";

function Subnav() {
  return (
    <nav className="sub-nav">
      <div className="Sub-nav-cont">
        <ul className="nav-list">
          <li>
            <NavLink to="/productdesign" className="nav-item" end viewTransition>
              Product Design
            </NavLink>
          </li>

          <li>
            <NavLink to="/backend" className="nav-item" end viewTransition>
              Backend
            </NavLink>
          </li>

          <li>
            <NavLink to="/frontend" className="nav-item" end viewTransition>
              Frontend
            </NavLink>
          </li>

          <li>
            <NavLink to="/dataanalysis" className="nav-item" end viewTransition>
              Data Analysis
            </NavLink>
          </li>

          <li>
            <NavLink to="/aimachinelearning" className="nav-item" end viewTransition>
              Ai Machine Learning
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Subnav;
