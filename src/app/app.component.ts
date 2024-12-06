import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpenseService } from './expense.service';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trackerAngular';
  expenses: any[] = [];

  expenseService = inject(ExpenseService);

  constructor(){
    this.expenseService.get().subscribe(expenses => {
      this.expenses = expenses;
    })
  }
}
