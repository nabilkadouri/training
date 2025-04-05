import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarInterface } from '../../models/interface';
import { CARS } from '../../datas/cars';



@Component({
  selector: 'app-function-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './function-search.component.html',
  styleUrl: './function-search.component.css',
})
export class FunctionSearchComponent {
  cars: CarInterface[] = CARS;
  filteredCars:CarInterface[] = [...CARS];
  searchTerm = '';
  selectedModel = ''; 

  search() {
    if (this.searchTerm) {
      const valeur = this.searchTerm.toLowerCase();
      this.filteredCars = this.filteredCars.filter((car) =>
        car.marque.toLowerCase().includes(valeur),
      );
      console.log(valeur);
      
    }

    if(!this.searchTerm){
      this.resetSearch()
    }

  }

  filtrerSelect() {
    if (this.selectedModel) {
      this.filteredCars = this.cars.filter(car =>
        car.marque === this.selectedModel
      );
    } else {
      this.filteredCars = [...this.cars];
    }
  }

  resetSearch() {
    this.searchTerm = '';
    this.filteredCars = [...this.cars];
  }
}
