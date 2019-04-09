import { Component, OnInit } from '@angular/core';
import { Hero } from '../../Models/hero';
import { HEROS } from '../../mock-heros';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  selectedHero: Hero;

  heroes = HEROS;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero){
    this.selectedHero = hero;
  }
}