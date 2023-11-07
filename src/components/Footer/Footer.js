import React from "react";
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <p id="derechos">
                Derechos Reservados
            </p>
            <div>
                <p id="redes">Redes:</p>
                <ul>
                    <li><a href="/#"><i class="bi bi-facebook"></i></a></li>
                    <li><a href="/#"><i class="bi bi-whatsapp"></i></a></li>
                    <li><a href="/#"><i class="bi bi-twitter"></i></a></li>
                    <li><a href="/#"><i class="bi bi-instagram"></i></a></li>
                    <li><a href="/#"><i class="bi material-symbols-outlined">groups</i></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;