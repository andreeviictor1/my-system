import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent {
  users = [
    { id: '001', name: 'User 1', role: 'Admin', status: 'Ativo' },
    { id: '002', name: 'User 2', role: 'User', status: 'Inativo' },
    { id: '003', name: 'User 3', role: 'User', status: 'Ativo' },
    { id: '004', name: 'User 4', role: 'Admin', status: 'Desconhecido' },
  ];


  getSeverity(status: string): string {
  switch (status) {
    case 'Ativo':
      return 'success';
    case 'Inativo':
      return 'danger';
    default:
      return 'info';
  }
}


}
