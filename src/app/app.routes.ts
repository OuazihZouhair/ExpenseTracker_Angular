import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExpenseComponent } from './expense/expense.component';
import { NewexpenseComponent } from './newexpense/newexpense.component';

export const routes: Routes = [
    {path : "home", component : HomeComponent},
    {path : "expenses", component : ExpenseComponent},
    {path : "newExpenses", component : NewexpenseComponent}
];
