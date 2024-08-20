import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export function initiateSwiperDestinations() {
  new Swiper('.destination-swiper', {
    modules: [Navigation],
    slidesPerView: 4,
    spaceBetween: 32,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-destinations-next",
      prevEl: ".swiper-destinations-prev",
    },
  });
}
