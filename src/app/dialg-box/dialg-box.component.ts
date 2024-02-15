
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialg-box',
  templateUrl: './dialg-box.component.html',
  styleUrl: './dialg-box.component.scss'
})
export class DialgBoxComponent {
  cardsData: any = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

  }
  ngOnInit(): void {
    this.cardsData = this.data.cardsData;
  }

}

