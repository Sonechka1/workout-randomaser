import React from "react";
import '../../src/page/style.css';
import { useNavigate } from "react-router-dom";
function Header() {
    const navigate = useNavigate();
    return(
    <header >
        <div className="header_wrapper">
            <ul className="nav header_nav">
                    <li className="nav_item"><a href="#">О проекте</a></li>
                    <li className="nav_item active"><a onClick={()=>navigate("/")}>Главная</a></li>
                    <li className="nav_item"><a onClick={()=>navigate("/history")}>История тренировок</a></li>
            </ul>
        </div>
    </header>
    )
}
export default Header;