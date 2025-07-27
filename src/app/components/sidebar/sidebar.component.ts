import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Ripple } from 'primeng/ripple';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  items: MenuItem[] = [
    { label: 'Dashboard', icon: 'pi pi-home' },
    { label: 'Usuários', icon: 'pi pi-users' },
    { label: 'Configurações', icon: 'pi pi-cog' }
  ];
}
