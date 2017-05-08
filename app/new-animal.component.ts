import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div class="col-md-12">
<button (click)="editForm=!eidtForm">Add A New Animal</button>
<div *ngIf="editForm">
  <div class="form-group">
    <label>Enter Name: </label>
    <input #name required>
  </div>
  <div class="form-group">
    <label>Enter Species: </label>
    <input #species required>
  </div>
  <div class="form-group">
    <label>Enter Sex: </label>
    <input #sex required>
  </div>
  <div class="form-group">
    <label>Enter Age: </label>
    <input #age required>
  </div>
  <div class="form-group">
    <label>Enter Diet: </label>
    <input #diet required>
  </div>
  <div class="form-group">
    <label>Enter location: </label>
    <input #location required>
  </div>
  <div class="form-group">
    <label>Enter Caretakes: </label>
    <input #caretakers required>
  </div>
  <div class="form-group">
    <label>Enter Likes: </label>
    <input #likes required>
  </div>
  <div class="form-group">
    <label>Enter Dislikes: </label>
    <input #dislikes required>
  </div>
  <button (click)="submit(species.value, name.value, age.value, diet.value, location.value, caretakers.value, sex.value, likes.value, dislikes.value)">Submit</button>
</div>
</div>

  `
})

export class NewAnimalComponent implements OnInit {

  editForm: boolean = false;
  @Output() newAnimalSender = new EventEmitter();
  submit(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string,  dislikes: string){
    var newAnimal: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimal);
    this.editForm = false;
  }
  constructor() { }

  ngOnInit() {
  }

}
