import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../shared/movies.service';
import { IResult, ITrendingResponse } from '../../utils/Interfaces';
import { FeaturedMoviesCarouselComponent } from "./featured-movies-carousel/featured-movies-carousel.component";

@Component({
  selector: 'app-all',
  imports: [FeaturedMoviesCarouselComponent],
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent implements OnInit{
  private getmovies = inject(MoviesService);
  data!:ITrendingResponse;
  movies! : IResult[]
  tvseries! : IResult[]
  ngOnInit(): void {
      this.getmovies.getAll().subscribe({
      next:(data) => {
        this.data = data
         console.log(this.data);
        this.movies = this.data.results.filter((movie) => movie.media_type === "movie");
        this.tvseries = this.data.results.filter((movie) => movie.media_type === "tv");
      },
      error:(err) => console.log(err),
      complete:() => console.log("complete")
  });

  }
}
