import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-produit',
  templateUrl: './card-produit.component.html',
  styleUrl: './card-produit.component.scss'
})
export class CardProduitComponent {
  @Input('data') data: any;
  
}
