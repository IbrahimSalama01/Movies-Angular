import { Component, inject } from '@angular/core';
import { IResult, ITrendingResponse } from '../../utils/Interfaces';
import { MoviesService } from '../../shared/movies.service';
import { MovieCardComponent } from '../../shared/movie-card/movie-card.component';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
@Component({
  selector: 'app-tvseries',
  imports: [MovieCardComponent, InfiniteScrollDirective],
  templateUrl: './tvseries.component.html',
  styleUrl: './tvseries.component.css'
})
export class TvseriesComponent {
  private getmovies = inject(MoviesService);
  data!: ITrendingResponse
  tvShows!: IResult[]
  ngOnInit(): void {
    this.loadTvShows()
  }

  loadTvShows() {
    let page = this.data?.page + 1 || 1
    this.getmovies.getTvShows(page).subscribe({
      next: (data) => {
        this.data = data
        this.tvShows?.push(...data.results) || (this.tvShows = data.results)
      },
      error: (err) => console.log(err),
      complete: () => console.log("complete")
    });
  }
}
