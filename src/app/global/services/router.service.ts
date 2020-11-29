import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  public anchorName$: BehaviorSubject<string> = new BehaviorSubject('welcome');

  constructor() { }
}
