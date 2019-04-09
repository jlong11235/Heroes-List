import { Injectable } from '@angular/core';
import { Hero } from '../Models/hero';
import { HEROS } from '../mock-heros';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messagesService: MessagesService) { }

  getHeroes(): Observable<Hero[]>{
    this.messagesService.add('HeroService: fetched heroes');
    return of(HEROS);
  }

  getHero(id: number): Observable<Hero>{
    this.messagesService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROS.find(hero => hero.id === id));
  }
}