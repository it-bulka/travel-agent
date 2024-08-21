import mobileNav from './modules/mobile-nav.js';
import { addAnimations } from "./modules/partners";
import { initiateSwiperDestinations } from "./modules/swiper-destinations";
import { autoCompletePlace } from "./modules/autoComplete";
import { datePicker } from "./modules/datePicker";
import { initScrollReveal } from "./modules/scrollReveal"
import { addTestimonialsSlider } from "./modules/testimonials-slider";

mobileNav();
autoCompletePlace()
datePicker()

window.addEventListener('load', () => {
  addAnimations()
  initiateSwiperDestinations()
  initScrollReveal()
  addTestimonialsSlider()
})
