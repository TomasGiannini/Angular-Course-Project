import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // creating an array of Recipe array objects. Import line at the top of this file.
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test', 'https://cdn.pixabay.com/photo/2015/10/26/07/21/vegetables-1006694_960_720.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
