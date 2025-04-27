import { Component, input } from '@angular/core';
import { IPerson } from '../../utils/Interfaces';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-person-card',
  imports: [CardModule,ButtonModule, TagModule,NgIf],
  templateUrl: './person-card.component.html',
  styleUrl: './person-card.component.css'
})
export class PersonCardComponent {
  person = input.required<IPerson>();

}
