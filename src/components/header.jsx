import React from "react";
import '../../src/page/style.css';
import { useNavigate } from "react-router-dom";
function Header() {
    const navigate = useNavigate();
    return(
   <header>
      <div className="header_wrapper">
        <ul className="nav header_nav">
          <li className="nav_item mobile_hidden">
            <span onClick={() => navigate("/")}>О проекте</span>
          </li>
          <li className="nav_item active">
            <span onClick={() => navigate("/")}>Главная</span>
          </li>
          <li className="nav_item">
            <span onClick={() => navigate("/history")}>История тренировок</span>
          </li>
        </ul>
      </div>
    </header>
    )
}
export default Header;