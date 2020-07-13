import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is Simply a test',
    'https://www.pequerecetas.com/wp-content/uploads/2018/05/recetas-con-brocoli-1.jpg'),
    new Recipe('Salsa Strogonoff','salsa para espaguetis','https://i.ytimg.com/vi/CgAKCjcL7iw/maxresdefault.jpg')

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
