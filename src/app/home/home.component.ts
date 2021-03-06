import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
        <md-card class="mat-card tile-no-background height-130">
          <h1 class="center-headline">
            <span class="trade-winds-4 textstroke">Stein, </span>
            <span class="merida-one-4 textstroke">Schere, </span>
            <span class="bubblegum-sans-4 textstroke">Papier.</span>
          </h1>
        </md-card>
        <md-card class="mat-card tile-no-background height-130">
          <button md-raised-button class="start-button" routerLink="/game">Spiel starten!</button>
        </md-card>

  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
