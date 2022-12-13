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
  constructor(public CocktailService: CocktailService) {}

  test() {
    console.log(this.cocktails);
  }
  ngOnInit(): void {
    this.CocktailService.getCocktails().subscribe((coctailsfromassets) => {
      this.cocktails = coctailsfromassets;
    });
  }
}
