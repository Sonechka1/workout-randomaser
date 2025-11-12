import React from "react";
import '../../src/page/style.css';
function Header() {
    return(
    <header >
        <div className="header_wrapper">
            <ul className="nav header_nav">
                    <li className="nav_item"><a href="#">О проекте</a></li>
                    <li className="nav_item active"><a href="#">Главная</a></li>
                    <li className="nav_item"><a href="#">Контакты</a></li>
            </ul>
        </div>
    </header>
    )
}
export default Header;