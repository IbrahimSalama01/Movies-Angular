import { Component, input } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { IResult } from '../../../utils/Interfaces';
import { MovieCardComponent } from "../../../shared/movie-card/movie-card.component";
@Component({
  selector: 'app-featured-movies-carousel',
  imports: [CarouselModule, MovieCardComponent],
  templateUrl: './featured-movies-carousel.component.html',
  styleUrl: './featured-movies-carousel.component.css'
})
export class FeaturedMoviesCarouselComponent {
  movies = input<IResult[]>();

  productsResponsiveOptions = [
    {
      breakpoint: '1499px',
      numVisible: 4,
      numScroll: 2
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 2
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ]
}
