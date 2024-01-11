import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
 
  title = 'Menu Resturant';

  DataCategory=[
      {categroy:"Desserts",img:"assets/images/DessertsMenu.png"},
      {categroy:"Entrees",img:"assets/images/EntreesMenu.png"},
      {categroy:"Nourriture",img:"assets/images/Nourriture.png"},
      {categroy:"Boissons",img:"assets/images/BeveragesMenu.png"},
  ];

  DataEntrees=[
    {
      name:'Harira',
      img:'assets/images/Harira.png',
      price:20,
      valueStar:5
    }
    
  ];

  DataNourriture=[
    {
      name:'Tajin',
      img:'assets/images/tajin.png',
      price:120,
      valueStar:5
    },{
      name:'Tanjia',
      img:'assets/images/Tanjia.jpg',
      price:130,
      valueStar:8
    },
    {
      name:'Boulfaf',
      img:'assets/images/Boulfaf.png',
      price:150,
      valueStar:6
    }
    
  ];

  DataDesserts=[
    {
      name:'Tiramisu',
      img:'assets/images/Tiramisu.png',
      price:50,
      valueStar:9
    },{
      name:'Angel Food Cake',
      img:'assets/images/angel-food-cake.png',
      price:45,
      valueStar:7
    },
    {
      name:'Chocolate mousse',
      img:'assets/images/chocolate-mousse.png',
      price:62,
      valueStar:5
    }
    
  ];

  DataBoissons=[
    {
      name:'Café Crème',
      img:'assets/images/Cafe-creme.jpg',
      price:20,
      valueStar:5
    },{
      name:'Chocolat Chaud',
      img:'assets/images/chocolat-chaud.png',
      price:30,
      valueStar:8
    },
    {
      name:'Jus D\'acocat',
      img:'assets/images/Jus-dacocat.png',
      price:25,
      valueStar:6
    },
    {
      name:'Jus D\'Orange',
      img:'assets/images/Jus-dorange.png',
      price:20,
      valueStar:8
    },
    
  ];


  constructor(private viewportScroller: ViewportScroller) {}
  ngOnInit(): void {
  }

  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
