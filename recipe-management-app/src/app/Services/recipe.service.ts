import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1'; // API Base URL

  constructor(private http: HttpClient) {}

  // Fetch recipes by search term
  searchRecipes(term: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search.php?s=${term}`);
  }

  // Fetch recipe details by ID
  getRecipeById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/lookup.php?i=${id}`);
  }

  // Fetch a random recipe
  getRandomRecipe(): Observable<any> {
    return this.http.get(`${this.apiUrl}/random.php`);
  }
}
