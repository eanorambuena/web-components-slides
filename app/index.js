import { register as registerSwiperCustomElements } from 'swiper/element/bundle';
import { load } from "emmy-dom";

registerSwiperCustomElements();

export function app({ el }) {
  el.className = 'flex flex-col justify-center items-center space-y-3 text-center w-full h-full text-white';

  return `
    <h1 class="sr-only">Hello from Emmy.js!</h1>
    <swiper-container slides-per-view="1" css-mode="true">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      ...
    </swiper-container>
  `;
  // https://www.sitepoint.com/how-to-create-beautiful-html-css-presentations-with-webslides/
}

export const App = load(app, 'App');
