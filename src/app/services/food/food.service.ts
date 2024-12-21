import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Food {
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodBySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 6 },
      { name: 'Vegetarian', count: 6 },
      { name: 'Indian', count: 3 },
      { name: 'Italian', count: 1 },
      { name: 'Japanese', count: 1 },
      { name: 'Middle Eastern', count: 1 },
      { name: 'Lunch', count: 1 },
      { name: 'Dinner', count: 3 },
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pav Bhaji',
        cookTime: '20-30',
        price: 50,
        favorite: true,
        origins: ['India'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/pav-bhaji.jpeg',
        tags: ['Vegetarian', 'Indian', 'Lunch'],
      },
      {
        id: 2,
        name: 'Masala Dosa',
        price: 40,
        cookTime: '15-20',
        favorite: true,
        origins: ['India', 'South India'],
        stars: 4.6,
        imageUrl: '/assets/images/foods/masala-dosa.jpeg',
        tags: ['Vegetarian', 'Indian', 'Breakfast'],
      },
      {
        id: 3,
        name: 'Vegetarian Pizza',
        price: 80,
        cookTime: '20-30',
        favorite: true,
        origins: ['Italy'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/vegetarian-pizza.jpeg',
        tags: ['Vegetarian', 'Italian', 'Dinner'],
      },
      {
        id: 4,
        name: 'Falafel',
        price: 60,
        cookTime: '15-20',
        favorite: true,
        origins: ['Middle East'],
        stars: 4.8,
        imageUrl: '/assets/images/foods/falafel.jpeg',
        tags: ['Vegetarian', 'Middle Eastern', 'Snack'],
      },
      {
        id: 5,
        name: 'Paneer Tikka',
        price: 80,
        cookTime: '25-35',
        favorite: true,
        origins: ['India'],
        stars: 4.8,
        imageUrl: '/assets/images/foods/paneer-tikka.jpeg',
        tags: ['Vegetarian', 'Indian', 'Dinner'],
      },
      {
        id: 6,
        name: 'Vegetable Sushi',
        price: 100,
        cookTime: '10-15',
        favorite: false,
        origins: ['Japan'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/vegetable-sushi.jpeg',
        tags: ['Vegetarian', 'Japanese', 'Dinner'],
      },
    ];
  }
}
