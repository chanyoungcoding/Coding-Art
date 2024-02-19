import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css/pagination";
import 'swiper/css';
import './MySwiper.css';

const MySwiper = () => {
  return ( 
    <div className="mySwiper">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        pagination={true}
        breakpoints={{
          450: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          1600: {
            slidesPerView: 5,
            spaceBetween: 50
          }
        }}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className='slide'>Slide 1</SwiperSlide>
        <SwiperSlide className='slide'>Slide 2</SwiperSlide>
        <SwiperSlide className='slide'>Slide 3</SwiperSlide>
        <SwiperSlide className='slide'>Slide 4</SwiperSlide>
        <SwiperSlide className='slide'>Slide 5</SwiperSlide>
        <SwiperSlide className='slide'>Slide 6</SwiperSlide>
        <SwiperSlide className='slide'>Slide 7</SwiperSlide>
        <SwiperSlide className='slide'>Slide 8</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MySwiper;

/*
modules : 특정 기능을 사용하고 싶을때 모듈에 추가해야 작동하는 기능들은 여기다 추가해야 합니다.
spaceBetween : 요소간의 거리를 나타냅니다.
slidesPerView : 요소를 몇개 보여 줄 것인지 정해줍니다. (부모 요소의 크기에 맞게 알아서 넓이를 조정해 줍니다.)
autoplay : swiper 을 자동으로 넘기게 합니다. (delay : 몇초마다 작동하는지 , disableOnInteraction : 사용자가 직접 작동했을때 autoplay 작동을 멈추는지 정해줍니다. false 일 경우 멈추지 않습니다.)
pagination : 하단에 요소의 위치 정보를 시각적으로 보여줍니다.
breakpoints : 반응형을 만들어 줍니다. (450 으로 설정했으면 width: 450px 이상일 때 적용한다는 의미입니다. )
onSlideChange : 요소가 슬라이드 될 때마다 이벤트를 등록합니다.


------------------------------------------------------------------------------------------------------------------------------------------------------------------
필요할 때 사용하세요. 

현재 보여주고 있는 slide를 활성화 비활성화에 따라 기능을 넣을 수 있습니다. ( 하나만 활성화 됩니다. )
<Swiper>
  <SwiperSlide>
    {({ isActive }) => (
      <div>Current slide is {isActive ? 'active' : 'not active'}</div>
    )}
  </SwiperSlide>
</Swiper>

*/
