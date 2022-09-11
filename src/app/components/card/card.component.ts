import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Data } from '../../db';
import { Item } from '../../Item';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  items: Item[] = Data;

  constructor() {}

  ngOnInit(): void {}

  onSetReminder = (items: Item) => {
    items.checked = !items.checked;
  };
}
