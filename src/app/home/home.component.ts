import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  foods: Food[]=[];
  constructor(private foodService: FoodService, private route: ActivatedRoute){

  }

  ngOnInit(): void{

    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.foods = this.foodService.getAllFoodBySearchTerm(params['searchTerm']);
      }else if(params['tag']){
          this.foods = this.foodService.getAllFoodsByTag(params['tag'])
      }else{
        this.foods = this.foodService.getAll();
      }
    });
    
    
  }

}
