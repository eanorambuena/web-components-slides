import { load, html } from "emmy-dom/dist/server"

export function carousel({ el }) {
  el.className = 'w-full md:w-1/2 lg:w-1/3 h-auto flex flex-col justify-center items-center'
  return html`
    <section class="carousel w-full" aria-label="Gallery">
      <ol class="carousel__viewport">
        <li id="carousel__slide1" tabindex="0" class="carousel__slide rounded-md shadow-md">
          <div class="bg-cover w-full h-full rounded-md shadow-md bg-[url('/assets/osuc.jpeg')]"></div>
          <div class="carousel__snapper">
            <a href="#carousel__slide4" class="carousel__prev">Go to last slide</a>
            <a href="#carousel__slide2" class="carousel__next">Go to next slide</a>
          </div>
        </li>
        <li id="carousel__slide2" tabindex="0" class="carousel__slide rounded-md shadow-md">
          <div class="bg-cover w-full h-full rounded-md shadow-md bg-[url('/assets/sus.jpeg')]"></div>
          <div class="carousel__snapper">
            <a href="#carousel__slide1" class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide3" class="carousel__next">Go to next slide</a>
          </div>
        </li>
        <li id="carousel__slide3" tabindex="0" class="carousel__slide rounded-md shadow-md">
          <div class="bg-cover w-full h-full rounded-md shadow-md bg-[url('/assets/derivando.jpeg')]"></div>
          <div class="carousel__snapper">
            <a href="#carousel__slide2" class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide4" class="carousel__next">Go to next slide</a>
          </div>
        </li>
        <li id="carousel__slide4" tabindex="0" class="carousel__slide rounded-md shadow-md">
          <div class="bg-cover w-full h-full rounded-md shadow-md bg-[url('/assets/ms.jpg')]"></div>
          <div class="carousel__snapper">
            <a href="#carousel__slide3" class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide5" class="carousel__next">Go to first slide</a>
          </div>
        <li id="carousel__slide5" tabindex="0" class="carousel__slide rounded-md shadow-md">
          <div class="bg-cover w-full h-full rounded-md shadow-md bg-[url('/assets/coord1.jpeg')]"></div>
          <div class="carousel__snapper">
            <a href="#carousel__slide4" class="carousel__prev">Go to last slide</a>
            <a href="#carousel__slide6" class="carousel__next">Go to next slide</a>
          </div>
        </li>
        <li id="carousel__slide6" tabindex="0" class="carousel__slide rounded-md shadow-md">
          <div class="bg-cover w-full h-full rounded-md shadow-md bg-[url('/assets/coord2.jpeg')]"></div>
          <div class="carousel__snapper">
            <a href="#carousel__slide5" class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide7" class="carousel__next">Go to next slide</a>
          </div>
        </li>
        <li id="carousel__slide7" tabindex="0" class="carousel__slide rounded-md shadow-md">
          <div class="bg-cover w-full h-full rounded-md shadow-md bg-[url('/assets/osuc.jpeg')]"></div>
          <div class="carousel__snapper">
            <a href="#carousel__slide6" class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide1" class="carousel__next">Go to next slide</a>
          </div>
        </li>
      </ol>
      <aside class="carousel__navigation hidden">
        <ol class="carousel__navigation-list">
          <li class="carousel__navigation-item">
            <a href="#carousel__slide1"
              class="carousel__navigation-button">Go to slide 1</a>
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide2"
              class="carousel__navigation-button">Go to slide 2</a>
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide3"
              class="carousel__navigation-button">Go to slide 3</a>
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide4"
              class="carousel__navigation-button">Go to slide 4</a>
          </li>
        </ol>
      </aside>
    </section>
  `
}

load(carousel, 'Carousel')
