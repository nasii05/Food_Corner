import { Injectable } from '@angular/core';
import { Food } from '../shared/model/Food';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from '../shared/model/Tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return sample_foods;
  }

  // serarch Food
  getAllFoodBySearchTerm(searchTerm:string){
    return this.getAll().filter( food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  // Get All Tag
  getAllTags():Tag[]{
    return sample_tags;
  }

  // Get Food by Tags
  getAllFoodByTag(tag: string):Food[]{
    return tag === 'All'?this.getAll():
    this.getAll().filter(food => food.tags?.includes(tag));
  }

  // Get Food by Id
  getFoodById(foodId:string){
    return this.getAll().find(food => food.id)?? new Food();
  }
}
