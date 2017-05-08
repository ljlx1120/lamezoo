import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div class="col-md-12">
<select (change)="changeAge($event.target.value)">
  <option value="all">All</option>
  <option value="under3">Less than 3-year-old</option>
</select>
<select (change)="changeCareTaker($event.target.value)">
  <option value="all">All</option>
  <option value="lt6">Less than 6</option>
  <option value="mt5">More than 5</option>
</select>
</div>

<div *ngFor="let animal of animals | age:filterByAge | caretaker:filterByCareTaker" class="panel panel-default col-md-6">
<div class="panel-heading">
  <h4 (click)="animal.edit=!animal.edit">{{animal.name}}</h4>
  <input [(ngModel)]="animal.name" placeholder={{animal.name}} *ngIf="animal.edit">
  <p [class]="sexColor(animal)">{{animal.sex}}</p>
  <p>{{animal.age}}-year-old</p>
  <input [(ngModel)]="animal.age" placeholder={{animal.age}} *ngIf="animal.edit">
</div>
<div class="panel-body">
  <p>Species: {{animal.species}}</p>
  <p>Diet: {{animal.diet}}</p>
  <p>Likes: {{animal.likes}}</p>
  <p>Dislikes: {{animal.dislikes}}</p>
  <input [(ngModel)]="animal.dislikes" placeholder="{{animal.dislikes}}" *ngIf="animal.edit">
</div>
<div class="panel-footer">
  <p>Been taken care of by {{animal.caretakers}} caretakers at {{animal.location}}</p>
</div>
</div>
  `
})

export class AnimalListComponent {
  filterByAge: string = 'all';
  filterByCareTaker: string = 'all';
  @Input() animals: Animal[];
  changeAge(option) {
    this.filterByAge = option;
  }
  changeCareTaker(option) {
  this.filterByCareTaker = option;
  }
  sexColor(animal) {
  if (animal.sex === 'Male') {
    return 'bg-primary';
  } else {
    return 'bg-info';
  }
}

}
