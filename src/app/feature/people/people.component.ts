import { Component, inject, OnInit } from '@angular/core';
import { IPerson, ITrendingPeopleResponse } from '../../utils/Interfaces';
import { MoviesService } from '../../shared/movies.service';
import { PersonCardComponent } from '../../shared/person-card/person-card.component';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-people',
  imports: [PersonCardComponent,InfiniteScrollDirective],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent implements OnInit {
  private getmovies = inject(MoviesService);
  data!: ITrendingPeopleResponse
  people!: IPerson[]
  ngOnInit(): void {
    this.loadPeople()
  }

  loadPeople() {
    let page = this.data?.page + 1 || 1
    this.getmovies.getPeople(page).subscribe({
      next: (data) => {
        this.data = data
        this.people?.push(...data.results) || (this.people = data.results)
      },
      error: (err) => console.log(err),
      complete: () => console.log("complete")
    })
  }
}
