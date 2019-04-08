import { Component, OnInit } from '@angular/core';
import { hero } from '../../Models/hero';
import { HEROS } from '../../mock-heros';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  hero: hero = {
      id: 1,
      name: 'Windstorm'
    };

  heros = HEROS;

  constructor() { }

  ngOnInit() {
  }

}