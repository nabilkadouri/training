import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-condition',
  imports: [CommonModule],
  templateUrl: './condition.component.html',
  styleUrl: './condition.component.css'
})
export class ConditionComponent {

  toggle = true;

  display(){
    this.toggle != this.toggle;
  }

}
