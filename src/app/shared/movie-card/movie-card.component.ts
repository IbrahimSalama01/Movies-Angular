import { IResult } from './../../utils/Interfaces';
import { Component, input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { BadgeModule } from 'primeng/badge';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-movie-card',
  imports: [CardModule, TagModule, BadgeModule, ButtonModule, RatingModule, FormsModule, RouterLink],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {

  public movie = input.required<IResult>() ;
  public rating = 0
}
