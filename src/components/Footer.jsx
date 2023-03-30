import React from "react";
import "../css/footer.css";


const Footer = () => {
    return (
        <footer className="footer">
			<div className="footer__container">
				<div className="footer__links-user">
					<input className="footer__links-user-btn" type="button" value="iniciar sesion" />
					<br />
					<input className="footer__links-user-btn" type="button" value="registrate" />
				</div>
				<div className="footer__network">
					<i className="footer__icon bi bi-whatsapp"></i>
					<i className="footer__icon bi bi-facebook"></i>
					<i className="footer__icon bi bi-twitter"></i>
				</div>
				<div className="footer__container-contact-us">
					<a className="footer__contact-us" href="./pages/contact.html">contactanos aqui</a>
				</div>
			</div>
		</footer>
    )
}

export default Footer;