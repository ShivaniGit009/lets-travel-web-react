import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import abtpg_abtimg from '../../img/about/abt1.webp';
import abtpg_abtimg1 from '../../img/about/abt2.jpg';
import abtpg_abtimg2 from '../../img/about/abt3.jpg';
import abtpg_icon_img from '../../img/icon/leaf-img1.png';
import abtbgImage from "../../img/about/abtpg-bg.jpg";

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

const AboutUs = () => {
  return (
    <div>
      <section
        className="abt-breadcrumb breadcrumb-mb"
        style={{
          backgroundImage: `linear-gradient(0deg, rgb(0 0 0 / 61%), rgb(255 255 255 / 35%)), url(${abtbgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // width: '100%',
          // height: '100%',
          backgroundAttachment: "fixed",
          padding: '100px',
        }}
      >
        <div>
          <h1>About Us</h1>
        </div>
      </section>
      <section className="abtpg-abt-sect">
      <div className="abt-container">
          <div className="row align-items-center">
            <div className="col-md-6 order-mb2">
              <div className="abt_flex_row">
                <div className="img-div1">
                  <img src={abtpg_abtimg} alt="about page image" />
                </div>
                <div className="img-div2">
                    <img className="img1 moveVerticle" src={abtpg_abtimg1} alt="about page image" />
                    <img className="img2" src={abtpg_abtimg2} alt="about page image" />
                </div>
                <img src={abtpg_icon_img} className="abt-icon" alt="about icon" />
              </div>
              </div>
            <div className="col-md-6 order-mb1">
              <div className="abtpg-content">
                <h2>Get The Best Travelling Experience With Us</h2>
                <p>At Let’s Travel, we believe every journey should be unique. Whether you're seeking peaceful retreats, thrilling 
                  adventures, or cultural immersion, we craft personalized itineraries tailored to your dreams. From flights to 
                  accommodations and activities, we handle every detail, ensuring a seamless, stress-free experience filled with 
                  unforgettable moments.
                </p>
                <p>
                Committed to responsible tourism, we work with local communities and embrace sustainable practices, ensuring your 
                travels leave a positive impact. With expert guidance and exceptional service, Let’s Travel transforms your travel 
                dreams into reality. Let’s explore the world together—because your next great adventure starts here!
                </p>
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

export default AboutUs
