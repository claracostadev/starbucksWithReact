import React from "react";
import "../css/gallery.css";
import Gallery1 from "../image/gallery-1.png"
import Gallery2 from "../image/gallery-2.png"
import Gallery3 from "../image/gallery-3.png"

const Gallery = () => {
    return (
        <section className="gallery">
			<div className="gallery__container-img">
				<img className="gallery__img" src={Gallery1} alt="gallery" />
				<img className="gallery__img" src={Gallery2} alt="gallery" />
				<img className="gallery__img" src={Gallery3} alt="gallery" />
			</div>
		</section>
    )
}



export default Gallery;