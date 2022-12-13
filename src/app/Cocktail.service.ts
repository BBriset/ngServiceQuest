import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail';
@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor() {}
  public getCocktails(): any {
    return new Cocktail(
      'mojito',
      8,
      'https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg'
    );
  }
}
