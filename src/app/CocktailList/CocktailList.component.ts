import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail';
import { CocktailService } from '../Cocktail.service';
@Component({
  selector: 'app-CocktailList',
  templateUrl: './CocktailList.component.html',
  styleUrls: ['./CocktailList.component.css'],
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[] = [];
  constructor(public CocktailService: CocktailService) {
    this.cocktails.push(this.CocktailService.getCocktails());
  }

  test() {
    console.log(this.CocktailService);
  }
  ngOnInit() {}
}
