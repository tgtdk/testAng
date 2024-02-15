import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialgBoxComponent } from './dialg-box/dialg-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  cardsData = [
    { "title": "Card 1", "content": "Content for Card 1" },
    { "title": "Card 2", "content": "Content for Card 2" },
    { "title": "Card 3", "content": "Content for Card 3" },
    { "title": "Card 4", "content": "Content for Card 4" },
    { "title": "Card 5", "content": "Content for Card 5" },
    { "title": "Card 6", "content": "Content for Card 6" },
    { "title": "Card 7", "content": "Content for Card 7" },
    { "title": "Card 8", "content": "Content for Card 8" },
    { "title": "Card 9", "content": "Content for Card 9" },
    { "title": "Card 10", "content": "Content for Card 10" },
    { "title": "Card 11", "content": "Content for Card 11" },
    { "title": "Card 12", "content": "Content for Card 12" },
    { "title": "Card 13", "content": "Content for Card 13" },
    { "title": "Card 14", "content": "Content for Card 14" },
    { "title": "Card 15", "content": "Content for Card 15" },
    { "title": "Card 16", "content": "Content for Card 16" },
    { "title": "Card 17", "content": "Content for Card 17" },
    { "title": "Card 18", "content": "Content for Card 18" },
    { "title": "Card 19", "content": "Content for Card 19" },
    { "title": "Card 20", "content": "Content for Card 20" }
  ]

  title = 'testAng';
  constructor(private dialog: MatDialog) {

  }

  openDialog(): void {
    this.dialog.open(DialgBoxComponent, {
      width: '800px',
      data: { cardsData: this.cardsData }
    });
  }
}