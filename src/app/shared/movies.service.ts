import { inject, Injectable } from '@angular/core';
import { IMovieDetails, ITrendingPeopleResponse, ITrendingResponse } from '../utils/Interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../utils/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private all: Observable<ITrendingResponse> | null = null;
  private movies: Observable<ITrendingResponse> | null = null;
  private tvShows: Observable<ITrendingResponse> | null = null;
  private People: Observable<ITrendingPeopleResponse> | null = null;
  private _httpClient = inject(HttpClient);
  private upToDate: boolean = false
  constructor() { }

  public getAll(): Observable<ITrendingResponse> {
    if (!this.all || !this.upToDate) {
      this.all = this.fetchAll();
    }
    return this.all;
  }
  public getMovies(page: number): Observable<ITrendingResponse> {
    if (!this.movies || !this.upToDate) {
      this.movies = this.fetchMovies(page);
    }
    return this.movies;
  }
  public getTvShows(page: number): Observable<ITrendingResponse> {
    if (!this.tvShows || !this.upToDate) {
      this.tvShows = this.fetchTvShows(page);
    }
    return this.tvShows;
  }
  public getPeople(page: number ): Observable<ITrendingPeopleResponse> {
    if (!this.People || !this.upToDate) {
      this.People = this.fetchPeople(page);
    }
    return this.People;
  }
  public getMovieDetails(id: number): Observable<IMovieDetails> {
    return this.fetchMovieDetails(id);
  }
  private fetchAll() {
    // setTimeout(() => {
    //   this.upToDate = false
    // }, 100000);
    return this._httpClient.get<ITrendingResponse>(environment.API_URL_Trending + "all" + environment.API_Options, {
      headers: {
        'Authorization': `Bearer ${environment.API_SECRET}`
      }
    });
  }
  private fetchMovies(page: number) {
    return this._httpClient.get<ITrendingResponse>(environment.API_URL_Trending + "movie" + environment.API_Options+"&page="+page, {
      headers: {
        'Authorization': `Bearer ${environment.API_SECRET}`
      }
    });
  }

  private fetchTvShows(page: number) {
    return this._httpClient.get<ITrendingResponse>(environment.API_URL_Trending + "tv" + environment.API_Options+"&page="+page, {
      headers: {
        'Authorization': `Bearer ${environment.API_SECRET}`
      }
    });
  }

  private fetchPeople(page: number) {
    return this._httpClient.get<ITrendingPeopleResponse>(environment.API_URL_Trending + "person" + environment.API_Options+"&page="+page, {
      headers: {
        'Authorization': `Bearer ${environment.API_SECRET}`
      }
    });
  }

  private fetchMovieDetails(id: number) {
    return this._httpClient.get<IMovieDetails>(environment.API_URL_Details + "movie/" + id, {
      headers: {
        'Authorization': `Bearer ${environment.API_SECRET}`
      }
    });
  }
}

