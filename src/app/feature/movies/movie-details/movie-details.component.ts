import { TagModule } from 'primeng/tag';
import { MoviesService } from './../../../shared/movies.service';
import { IMovieDetails } from './../../../utils/Interfaces';
import { Component, inject, Input, OnInit } from '@angular/core';
import { RatingModule } from 'primeng/rating';
import {  DecimalPipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-movie-details',
  imports: [RatingModule,TagModule,UpperCasePipe,DecimalPipe, FormsModule,NgFor,NgIf,CardModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
  _moviesService = inject(MoviesService)
  movie!:IMovieDetails
  @Input() id!: number
  ngOnInit(): void {
      this.getMovieDetails();
  }
  getMovieDetails(){
    this._moviesService.getMovieDetails(this.id).subscribe({
      next:(data) => {
        this.movie = data
        console.log(this.movie);
      },
      error:(err) => console.log(err),
      complete:() => console.log("complete")
    })

  }
}
