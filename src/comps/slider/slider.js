import { useSelector, useDispatch } from "react-redux";
import { setCurrentpage } from "../../AppSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import applist from "../../app-list.json";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import "./slider.css";

const Slider = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.app);


  return (
    <div className="container has-pt-6 has-pb-6 swiper-conatiner">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        pagination={{
          clickable: true,
        }}
        className="slider-element"
        modules={[Autoplay, Pagination, Navigation]}
      >
        {createSliderItems()}
      </Swiper>
    </div>
  );
};

export default Slider;

const createSliderItems = () => {
  let sliderData = [];
  for (let i = 0; i < applist.length; i++) {
    let name = applist[i].name;
    let desc = applist[i].desc;
    let link = applist[i].link;
    let img = applist[i].img;
    let key = "slide_" + i;

    sliderData.push(
      <SwiperSlide key={key}>
        <a className="slide-card" href={link}>
          <img src={img} alt={desc} />
          <div className="has-size-7 has-weight-black has-mb-4 slider-title">{name}</div>
          <div className="has-size-3 has-lh-heading has-text-black slider-text">
            {desc}
          </div>
        </a>
      </SwiperSlide>
    );
  }

  return sliderData;
};
