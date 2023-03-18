import { Component } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  route: string = '';

  cards = [
    { title: 'USUARIOS', route: '/dashboard/usuarios'},
    { title: 'Card 3' },
    { title: 'Card 4' },
    { title: 'Card 5' },
    { title: 'Card 6' },
    { title: 'Card 7' },
    { title: 'Card 2' }
  ];
}
