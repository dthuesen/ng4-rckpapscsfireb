import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-high-score',
  template: `
    <md-card class="background-middle-dark">
      <h2 class="light-text ranchers-2-dark">Meinen Score speichern</h2>
      
      <form (ngSubmit)="savePlayer(form.value)" name="form" #form="ngForm">
      
        <md-input-container>
          <input type="text" 
                 name="name" 
                 mdInput 
                 placeholder="Name" 
                 #name="ngModel"
                 ngModel 
                 required>
        </md-input-container>
        
        <button md-raised-button type="submit" [disabled]="!form.valid">Score speichern</button>
        
      </form>  
      <button md-raised-button (click)="emitPlayerData()">Abbrechen</button>
      
    </md-card>
  `,
  styles: []
})
export class HighScoreComponent {
  playersData;

  @Output() savePlayerData = new EventEmitter();

  constructor() {
    this.playersData = {
        namePlayer: 'noname'
    };
  }

  savePlayer(data) {
    this.playersData.namePlayer = data.name;
    this.emitPlayerData();
  }

  emitPlayerData() {
    this.savePlayerData.emit(this.playersData);
  }

}
