import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Categorie } from "src/app/categorie";
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  constructor(private categoryService: CategoryService, private router:Router) { }
  ngOnInit(): void {
    this.retrieveCategories();
  }
  editpressed=false;
  category: Categorie = new Categorie();
  categories:any;
  categoryAdd(){
    this.categoryService.create(this.category);
    
  }
  validateCategory(){

  }
  deleteCategory(cat:Categorie){
    this.categoryService.delete(cat.id);
  }
  modifyCategory(cat:Categorie) {
    this.editpressed=true;
  }
  categoryUpdate() {
    
  }
  onReset(){
    this.editpressed=false;
  }
  retrieveCategories(): void {
    this.categoryService.getAll()
      .subscribe(
        data => {
          this.categories = data;
        },
        error => {
          console.log(error);
        });
  }
}
