import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Biryani', 'Chicken Dum Biryani',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQN3S7Nvh9M0Seos75rl6YWV91rT7s_dc_out0V4pha7NtNr0as'),
      new Recipe('Biryani', 'Mutton Dum Biryani',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQN3S7Nvh9M0Seos75rl6YWV91rT7s_dc_out0V4pha7NtNr0as')

  ];
  constructor() { }

  ngOnInit() {
  }

}
