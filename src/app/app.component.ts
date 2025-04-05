import { CommonModule} from '@angular/common';
import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FunctionSearchComponent } from './composants/function-search/function-search.component';
import { ConditionComponent } from "./composants/condition/condition.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, FunctionSearchComponent, ConditionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
