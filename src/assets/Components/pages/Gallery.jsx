import React from 'react'
import glbgImage from "../../img/gallery/gallery-breadcrumb.jpg";
import gallerylineImage from "../../img/icon/camera.png";
import g1 from '../../img/gallery/g1.jpg'
import g2 from '../../img/gallery/g2.jpg'
import g3 from '../../img/gallery/g3.jpg'
import g4 from '../../img/gallery/g4.jpg'
import g5 from '../../img/gallery/g5.jpg'
import g6 from '../../img/gallery/g6.jpg'
import g7 from '../../img/gallery/g7.jpg'
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div>
      <section
        className="abt-breadcrumb breadcrumb-mb"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.61), rgb(0 0 0 / 35%)), url(${glbgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // width: '100%',
          // height: '100%',
          backgroundAttachment: "fixed",
          padding: '100px',
          color: '#fff',
        }}
      >
      <div>
        <h1>Gallery</h1>
      </div>
    </section>
    <section className="gallerypg-line-sect">
      <div className="container">
        <div className="single-line-txt-home">
          <h4>"Every journey unfolds a story, etched in the landscapes and carried by the winds, capturing moments that make the world feel both vast and like home."</h4>
           {/* <img src={gallerylineImage} className="gallerypg-line-img" alt="gallery icon" /> */}
        </div>
      </div>
    </section>
    <section className="gallery-icon-sect">
      <div>
        <img src={gallerylineImage} alt="gallery icon" className="gallerypg-line-img" />
      </div>
    </section>
    <section className="gallery-pg-sect">
      <div className="container">
        <div className="row">
        <div className="col-md-3 col-6 pt-mb-20">
            <div class="gallerypg-img-mdiv">
               <img src={g1} alt="gallery image" />
               <Link to="tour-packages"><h4>Agra</h4></Link>
            </div>
          </div>
          <div className="col-md-3 col-6 pt-mb-20">
            <div class="gallerypg-img-mdiv">
               <img src={g2} alt="gallery image" />
               <Link to="tour-packages"><h4>Jaipur</h4></Link>
            </div>
          </div>
          <div className="col-md-3 col-6 pt-mb-20">
            <div class="gallerypg-img-mdiv">
               <img src={g3} alt="gallery image" />
               <Link to="tour-packages"><h4>Rajasthan</h4></Link>
            </div>
          </div>
          <div className="col-md-3 col-6 pt-mb-20">
            <div class="gallerypg-img-mdiv">
               <img src={g4} alt="gallery image" />
               <Link to="tour-packages"><h4>Jaipur</h4></Link>
            </div>
          </div>
          <div className="col-md-3 col-6 pt-30 pt-mb-20">
            <div class="gallerypg-img-mdiv">
               <img src={g5} alt="gallery image" />
               <Link to="tour-packages"><h4>Kerala</h4></Link>
            </div>
          </div>
          <div className="col-md-3 col-6 pt-30 pt-mb-20">
            <div class="gallerypg-img-mdiv">
               <img src={g6} alt="gallery image" />
               <Link to="tour-packages"><h4>Assam</h4></Link>
            </div>
          </div>
          <div className="col-md-3 col-6 pt-30 pt-mb-20">
            <div class="gallerypg-img-mdiv">
               <img src={g7} alt="gallery image" />
               <Link to="tour-packages"><h4>Kedarnath</h4></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Gallery
