import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../shared/movies.service';
import { IResult, ITrendingResponse } from '../../utils/Interfaces';
import { MovieCardComponent } from '../../shared/movie-card/movie-card.component';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-movies',
  imports: [MovieCardComponent, InfiniteScrollDirective],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  private getmovies = inject(MoviesService);
  data!: ITrendingResponse
  movies!: IResult[]
  ngOnInit(): void {
    this.loadMovies()
  }

  loadMovies() {
    let page = this.data?.page + 1 || 1
    this.getmovies.getMovies(page).subscribe({
      next: (data) => {
        this.data = data
        this.movies?.push(...data.results) || (this.movies = data.results)
      },
      error: (err) => console.log(err),
      complete: () => console.log("complete")
    });
  }

}
