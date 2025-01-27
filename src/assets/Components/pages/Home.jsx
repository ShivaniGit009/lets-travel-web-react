import React from 'react'
import homevideo from '../../img/home/homepg-video.mp4';
import home_sect_icon from '../../img/home/travel2.png';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {  Autoplay } from 'swiper/modules';
import agra from '../../img/packages/agra.jpg'
import kerala from '../../img/packages/kerala.jpg'
import karnataka from '../../img/packages/karnataka.jpg'
import assam from '../../img/packages/assam.jpg'
import home_abt_sect_img from '../../img/home/abt-sect.jpg';


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
     
  }
];
const review = [
  {
      id: 1,
      reviewname: 'Sarah M.',
      reviewtext: '" The team at Let’s Travel went above and beyond to ensure my solo trip was safe and enjoyable. They curated an itinerary that matched my interests perfectly! "',
  },
  {
      id: 2,
      reviewname: 'Rajesh K.',
      reviewtext: '" Amazing service and hassle-free planning! Let’s Travel helped us explore hidden gems we never would have found on our own. Truly the best travel experience we’ve had! "',
  },
  {
    id: 3,
    reviewname: 'Emily T.',
    reviewtext: '" I’ve traveled with several agencies, but Let’s Travel stands out. Their attention to detail and personalized itineraries made our family vacation stress-free and memorable. Highly recommended! "',
},
  {
      id: 4,
      reviewname: 'Ahmed H.',
      reviewtext: '" Let’s Travel made our honeymoon truly magical! From seamless planning to unique recommendations, every detail was perfect. We’ll definitely choose them again for our next adventure! "',
  }
];

const Home = () => {
  return (
    <div>
      <section>
        {/* <div>
          <video width="320" height="240" controls autoplay>
            <source src="" type="video/mp4" />
          </video>
        </div> */}

        <div>
        <video className='background-video' autoPlay loop muted >
          <source src={homevideo} type="video/mp4" />
        </video>
        </div>
      </section>

      <section className="single-line-sect">
        <div className="container">
          <div className="single-line-txt-home">
            <h4>"Every journey begins with a single step, but it’s the winding paths, hidden trails, and endless horizons that call to our hearts, leading us not just to new places, but to moments that change us forever, painting memories in colors we never knew existed."</h4>
          </div>
        </div>
      </section>

      <section className="icon-sect">
        <div>
          <img src={home_sect_icon} alt="home travel icon" className="home-sect-icon" />
        </div>
      </section>

      <section className="tour-packages-sect">
          <div className="slider-container">
              <div className="swiper-container">
          {/* Title and Description */}
          <div className=" ">
            <h2 className="">Tour Packages</h2>
          </div>

          <Swiper className=""
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
            spaceBetween={30} // Space between cards
            slidesPerView={3} // Number of visible slides on large screens
            breakpoints={{
              320: { slidesPerView: 1 }, // 1 card on mobile
              768: { slidesPerView: 2 }, // 2 cards on tablets
              1024: { slidesPerView: 3 }, // 3 cards on desktops
            }}
            loop={true} // Enable looping
            autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
          </div>
      </section>

      <section className="home-about-sect">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-mb2">
              <img src={home_abt_sect_img} alt="about image" />
            </div>
            <div className="col-md-6 order-mb1">
              <h2>Get The Best Travelling Experience With Us</h2>
              <p>At Let’s Travel, we are your trusted partners in crafting unforgettable journeys. Whether you’re seeking 
                serene escapes, adventurous getaways, or cultural explorations, we bring your travel dreams to life. With 
                personalized itineraries, expert guidance, and a passion for creating meaningful experiences, we ensure every 
                trip is seamless, enriching, and truly memorable. Let’s explore the world together—because your next great 
                adventure starts here!</p>

                <div className="home-abt-btn">
                  <button className="btn-dl">Contact Us</button>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="review-sect">
                <div className="slider-container">
                    <div className="swiper-container">
                {/* Title and Description */}
                <div className=" ">
                  <h2 className="">Testimonials</h2>
                </div>
      
                <Swiper className=""
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                pagination={{ clickable: true }}
                  spaceBetween={30} // Space between cards
                  slidesPerView={3} // Number of visible slides on large screens
                  breakpoints={{
                    320: { slidesPerView: 1 }, // 1 card on mobile
                    768: { slidesPerView: 2 }, // 2 cards on tablets
                    1024: { slidesPerView: 3 }, // 3 cards on desktops
                  }}
                  loop={true} // Enable looping
                  autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay
                >
                  {review.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="reviewm-div">
                        <p>{item.reviewtext}</p>
                        <h4>{item.reviewname}</h4>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
                </div>
            </section>

    </div>
  )
}

export default Home;
