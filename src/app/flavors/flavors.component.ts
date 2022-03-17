import { Component, OnInit } from '@angular/core';
import { Flavors } from '../flavors';

import { FLAVORS } from '../FlavorsList';
import { starRating } from '../../starRating';

@Component({
  selector: 'app-Flavors',
  templateUrl: './flavors.component.html',
  styleUrls: ['./flavors.component.css'],
})
export class FlavorsComponent implements OnInit {
  flavors = FLAVORS;

  selectedFlavors?: Flavors;

  constructor() {}

  ngOnInit(): void {}

  onSelect(flavors: Flavors): void {
    this.selectedFlavors = flavors;
  }

  star(rating : number) : string{
    return starRating(rating);
  }

}
