import React from 'react'
import agra from '../../img/packages/agra.jpg'
import kerala from '../../img/packages/kerala.jpg'
import karnataka from '../../img/packages/karnataka.jpg'
import assam from '../../img/packages/assam.jpg'
import ladakh from '../../img/packages/ladakh.jpg'
import amritsar from '../../img/packages/amritsar.jpg'
import tpbgImage from "../../img/tour-packages/tp-breadcrumb.jpg";
const data = [
  {
      id: 1,
      title: 'Agra',
      country: 'India',
      price: '4000',
      text: 'Agra seamlessly blends its historical legacy with modern charm, making it a must-visit destination for travelers.',
      imgSrc: agra,
  },
  {
      id: 2,
      title: 'Kerala',
      country: 'India',
      price: '2200',
      text: 'Kerala, often referred to as *Gods Own Country, is a stunning travel destination located in the southwestern region of India',
      imgSrc: kerala,
     
  },
  {
      id: 3,
      title: 'Karnataka',
      country: 'India',
      price: '3500',
      text: 'Karnataka is known for its historical landmarks, diverse landscapes, and vibrant culture, it offers something for every traveler.',
      imgSrc: karnataka,
      
  },
  {
      id: 4,
      title: 'Assam',
      country: 'India',
      price: '5000',
      text: 'Assam is a treasure trove of history, biodiversity, and vibrant traditions in part of the "Seven Sisters" of Northeast India',
      imgSrc: assam,
     
  },
  {
    id: 5,
    title: 'Ladakh',
    country: 'India',
    price: '9500',
    text: 'Ladakh, often called the "Land of High Passes," is a breathtakingly beautiful region in the northernmost part of India, nestled in the Himalayas.',
    imgSrc: ladakh,
   
  },
  {
    id: 6,
    title: 'Amritsar',
    country: 'India',
    price: '9500',
    text: 'Amritsar, located in the state of Punjab, is one of India’s most revered cities, renowned for its historical significance, cultural vibrancy, and spiritual richness.',
    imgSrc: amritsar,
   
  }
];


const TourPackages = () => {
  return (
    <div>
      <section
              className="abt-breadcrumb breadcrumb-mb"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.61), rgb(0 0 0 / 35%)), url(${tpbgImage})`,
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
                <h1>Tour Packages</h1>
              </div>
            </section>
      <section className="tour-packages-pg-sect">
          <div className="container">
              <div className="">
          {/* Title and Description */}
          <div className=" ">
            {/* <h2 className="">Tour Packages</h2> */}
          </div>

          <div className="row">
            {/* <div className="col-md-4"> */}
              {data.map((item, index) => (
                <div  className="col-md-4" key={index}>
                  <div className="slider-divm">
                    <img src={item.imgSrc} alt='' />
                    <div className="slider-content">
                      <div className="slider-title-div">
                        <h4 className='slider-title'>{item.title}</h4>
                        <h4 className='slider-country'><i class="fa fa-map-marker"></i>{item.country}</h4>
                        <h4 className='slider-price'>₹{item.price}<span> / per person</span></h4>
                      </div>
                      <p>{item.text}</p>
                      <div className="slider-btn">
                        <a href="#">Book Now</a>
                        <a href="#">Explore More</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            {/* </div> */}
          </div>
        </div>
          </div>
      </section>
    </div>
  )
}

export default TourPackages
