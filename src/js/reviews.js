'use strict';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';
import { swiperActivate } from './reviews-sw';
import { fetchData } from './reviews-api';
import { reviewsTemplate } from './reviews-render';
const gallery = document.querySelector('.swiper-reviews .swiper-wrapper');

//  ============ main function==========
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const data = await fetchData();
    const markup = reviewsTemplate(data);
    gallery.innerHTML = markup;
    swiperActivate();
    
  } catch {
    // iziToast.show('Server Error!');
    gallery.innerHTML = `<p class = "alert">Not found</p>`;
  }
});
