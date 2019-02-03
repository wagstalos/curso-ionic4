import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  openLayoutHeaderFooter(){
   // this.navCtrl.goForward('layoutHeaderFooter');
   this.navCtrl.navigateForward('layout-header-footer');
  }

  openLayoutTabs(){
    this.navCtrl.navigateForward('layout-tabs');
  }

  openLayoutMenu(){
    this.navCtrl.navigateForward('layout-menu');
  }
  openLayoutSplit(){
    this.navCtrl.navigateForward('layout-split');
  }
  
}
