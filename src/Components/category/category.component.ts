import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit  {
  @Input('DataCategory') DataCategory: any;
  
  screenWidth:any;

  constructor() { }

  ngOnInit(): void {
   this.screenWidth= window.innerWidth;
  }

  onResize(e:any){
    this.screenWidth= window.innerWidth;   
  }
}
