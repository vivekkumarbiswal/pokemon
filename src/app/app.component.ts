import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemon';

  pokemonObj: any = {};
  bidoof: any = {};
  showBidoof: boolean = false;

  constructor( private service: ServiceService ){}

  ngOnInit(): void{
    this.getPokemonData();
  }

  getPokemonData(){
    this.service.getPokemonData().subscribe((res:any)=>{
      this.pokemonObj = res;
      console.log("pokemonObj", this.pokemonObj);
      
    })
  }

  shinyBidoof(){
    this.service.shinyBidoof().subscribe((res:any)=>{
      console.log('res', res);
      this.bidoof = res.sprites.front_shiny
      this.showBidoof = true;  
            
    })
  }
}
