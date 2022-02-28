import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper';
import { useState } from 'react';

const thumbClasses =
  'border first:rounded-l-md last:rounded-r-md hover:!border-teal-500 not-last:border-r-transparent';

function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="container py-20">
      <div>
        <Swiper
          modules={[Thumbs]}
          slidesPerView={3}
          className="text-center text-sm"
          onSwiper={setThumbsSwiper}
        >
          <SwiperSlide className={thumbClasses}>
            <div className="cursor-pointer items-center justify-center px-2 py-4">
              <h2>Lorem</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className={thumbClasses}>
            <div className="cursor-pointer items-center justify-center px-2 py-4">
              <h2>ipsum</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className={thumbClasses}>
            <div className="cursor-pointer items-center justify-center px-2 py-4">
              <h2>dolor</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className={thumbClasses}>
            <div className="cursor-pointer items-center justify-center px-2 py-4">
              <h2>sit</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className={thumbClasses}>
            <div className="cursor-pointer items-center justify-center px-2 py-4">
              <h2>amet</h2>
            </div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          modules={[Thumbs]}
          spaceBetween={30}
          thumbs={{
            swiper: thumbsSwiper,
            slideThumbActiveClass: 'bg-sky-500 text-white',
          }}
          className="-mx-4 mt-5 overflow-hidden p-4"
        >
          <SwiperSlide className="rounded-lg">
            <img
              className="w-full"
              src="https://picsum.photos/seed/foobar1/400/200"
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-lg">
            <img
              className="w-full"
              src="https://picsum.photos/seed/foobar2/400/200"
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-lg">
            <img
              className="w-full"
              src="https://picsum.photos/seed/foobar3/400/200"
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-lg">
            <img
              className="w-full"
              src="https://picsum.photos/seed/foobar4/400/200"
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-lg">
            <img
              className="w-full"
              src="https://picsum.photos/seed/foobar5/400/200"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default App;
