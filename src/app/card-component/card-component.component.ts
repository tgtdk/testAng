import { Component } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrl: './card-component.component.scss'
})
export class CardComponentComponent {
  hiddenPriceToggle = false;
  hintMessage = "For Show Price"
  cards = [
    { heading: 'Card 1', price: 5000 },
    { heading: 'Card 2', price: 700 },
    { heading: 'Card 2', price: 700 },
    { heading: 'Card 2', price: 700 },
    { heading: 'Card 2', price: 700 },
    { heading: 'Card 2', price: 700 },
    { heading: 'Card 2', price: 700 },
    { heading: 'Card 2', price: 700 },
    { heading: 'Card 2', price: 700 },
    { heading: 'Card 2', price: 700 },
    { heading: 'Card 2', price: 700 },
    { heading: 'Card 2', price: 700 },
    { heading: 'Card 2', price: 700 },
    { heading: 'Card 2', price: 700 },
    { heading: 'Card 2', price: 700 },
    { heading: 'Card 2', price: 700 },
    { heading: 'Card 2', price: 700 },
    { heading: 'Card 3', price: 3000 }
  ];

  cardsData = [
    { title: 'Card 1', content: 'Content for Card 1' },
    { title: 'Card 2', content: 'Content for Card 2' },
    { title: 'Card 20', content: 'Content for Card 20' }
  ];

}
