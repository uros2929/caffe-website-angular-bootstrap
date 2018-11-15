import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

coffees=["ESPRESSO","LATTE","MACCHIATO","WITH CREAM","AMERICANO","IRISH COFFEE"];
teas=["ENGLISH BREAKFAST","EARL GREY","GUNPOWDER","MOROCCAN MINT","THAI GREEN","VANILLA CHAI","TROPICAL FOREST","SLEEP","DETOX","ENERGY"];
beers=["HEINEKEN","GUINNESS","BUDWEISER","JOHN SMITH","STELLA ARTOIS","BAVARIA","CORONA"];
wines=["PROSECCO","THE SKINNY FIZZ","MOËT & CHANDON IMPÉRIAL","DOM PÉRIGNON VINTAGE","MERLOT OYSTER BAY","BORDEAUX ROTHSCHILD, MOUTON CADET","CABERNET SAUVIGNON TUCUMEN","Chateauneuf du Pape, Vieux Chevalier","SAUVIGNON BLANC DOG POINT","PINOT GRIGIO RIESLING","PINOT GRIGIO LACENTO","PINOT GRIGIO ROSÉ IL PALLONE","House Classics"];

starters=["PULLED BEEF & ONION RILLETTES","WILD ATLANTIC SCALLOPS","BAKED CHEDDAR MUSHROOMS (V)","SALT & PEPPER CALAMARI","NACHOS WITH CHILLI","CLUCK & DUCK WINGS"];
TheSteakExperiences=["50 Day Aged Ribeye 8oz","50 Day Aged Grass Fed Ribeye 16oz","Butchers Block","Bistro Cut Rump 8oz","Black Angus Sirloin 10oz","Fillet 8oz","Ribeye 12oz","Rump 8oz","Sirloin 12oz","Sirloin 8oz","Sirloin 8oz","T Bone 20oz","Long Bone Tomahawk"];
burgers=["BACON & SMOKED CHEDDAR BURGER","SMOKE & FIRE BURGER","STEAK HOUSE BURGER","UPTOWN BURGER","GLAZED CHICKEN BURGER"];
fishSaladVeges=["Mixed Grain & Roasted Veg Salad with Salmon","Mixed Grain & Roasted Veg Salad with Rump Steak","Oven Stuffed Roasted Aubergine","Fennel, Quinoa & Pepper Burger","Grilled Seabass","Salmon Supreme","Hand Battered Tempura Cod","Hand Battered Tempura Haddock","Caesar Salad","Chicken Caesar Salad","Goats Cheese Caesar Salad","Rump Steak Caesar Salad"];
desserts=["CRÈME BRÛLÉE (V)","INDULGENT SHARING BOARD","Strawberry & Prosecco Sorbet and Meringue","Caramel Biscuit Vanilla Cheesecake","Miller's Chocolate Hazelnut Bomb","Banoffee Pie","British Cheese Board","Belgian Chocolate Brownie","Silverpail Ice Cream & Cookie","Sticky Toffee Pudding"]

  constructor() { }

  ngOnInit() {
  }

  showMenu(element1,element2){
    element1.style.display="block";
    if (element1.style.display="block") {
      element2.style.display="none"
    }
  }
  showModal(element){
    element.style.display="block";
  }
  closeModal(element){
    element.style.display="";
  }
}
