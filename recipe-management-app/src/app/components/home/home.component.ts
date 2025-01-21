import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../Services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  recipes: any[] = []; // Store fetched recipes
  loading: boolean = true; // Show loading indicator

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    // Fetch recipes when the component initializes
    this.recipeService.searchRecipes('').subscribe({
      next: (response) => {
        this.recipes = response.meals || [];
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching recipes:', error);
        this.loading = false;
      },
    });
  }
}