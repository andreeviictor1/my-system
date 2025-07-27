import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  products = [
    { code: 'P001', name: 'Produto 1', category: 'Categoria A', quantity: 10 },
    { code: 'P002', name: 'Produto 2', category: 'Categoria B', quantity: 5 },
    { code: 'P003', name: 'Produto 3', category: 'Categoria A', quantity: 8 }
  ];
}
