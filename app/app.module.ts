import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import { AnimalListComponent } from './animal-list.component';
import { AgePipe } from './age.pipe';
import { CaretakerPipe } from './caretaker.pipe';
import { NewAnimalComponent } from './new-animal.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [ AppComponent, AnimalListComponent, AgePipe, CaretakerPipe, NewAnimalComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
