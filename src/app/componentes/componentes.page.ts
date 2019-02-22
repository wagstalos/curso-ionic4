import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.page.html',
  styleUrls: ['./componentes.page.scss'],
})
export class ComponentesPage implements OnInit {

  constructor(private navCrtl : NavController) { }

  ngOnInit() {
  }
  abrirPagina(nomeDaPagina : string){
    this.navCrtl.navigateForward(nomeDaPagina);
  }
}
