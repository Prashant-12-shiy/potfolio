import React from 'react'
import "./Footer.css"
import Logo from "../../assets/logo1.png"
import Logo_dark from "../../assets/logo.png"


export const Footer = ({darkMode}) => {
  return (
    <footer className="footer ">
    <div className="footer-container">
        <div className="footer-content">
            <a href="/" className="logo">
                <img src={darkMode ? Logo_dark : Logo} alt="Flowbite Logo" />
            </a>
            <ul className="footer-list">
                <li>
                    <a href="#hero" >About</a>
                </li>
                {/* <li>
                    Contact
                </li> */}
            </ul>
        </div>
        <hr />
        <span class="copyright">© 2023 <a href="/" class="hover:underline">Prash™</a>. All Rights Reserved.</span>
    </div>
</footer>
  )
}
