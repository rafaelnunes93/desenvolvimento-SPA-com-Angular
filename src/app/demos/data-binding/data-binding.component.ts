import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [
  ]
})
export class DataBindingComponent {

  public  contadorCliques: number = 0;
  public urlImagem: string = "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg";
  public nome: string = "";

  adicionarClique(){
    this.contadorCliques++;
  }


  ZerarContado(){
    this.contadorCliques = 0;
  }

}
