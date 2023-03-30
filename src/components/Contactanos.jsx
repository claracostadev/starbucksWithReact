import React from "react";
import "../css/contactanos.css"

const Contactanos = () => {
    return (
        <section className="contact">
			<h3 className="contact__title">CONTACTANOS</h3>
			<form className="contact__form">
				<div className="contact__container-email contact__container-input">
					<label className="contact__label">correo electronico</label>
					<input
						className="contact__input"
						type="email"
						name="contact_email"
						placeholder="coloque su correo electronico"
						required
					/>
				</div>
				<div className="contact__container-comment contact__container-input">
					<label className="contact__label">comentario</label>
					<textarea
						className="contact__textarea"
						name="contact_comment"
						placeholder="coloque su comentario"
						required
					></textarea>
				</div>
				<input type="submit" className="contact__form-btn" />
			</form>
		</section>
    )
}

export default Contactanos;