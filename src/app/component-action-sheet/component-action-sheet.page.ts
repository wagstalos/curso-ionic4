import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-component-action-sheet',
  templateUrl: './component-action-sheet.page.html',
  styleUrls: ['./component-action-sheet.page.scss'],
})
export class ComponentActionSheetPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  async abrirActionSheet() {
    let actionSheet = await this.actionSheetCtrl.create({
      header: 'Albuns',
      buttons: [
        {
          text: 'Excluir',
          role: 'desctructive',
          icon: 'trash',
          handler: () => {
            console.log('Excluir');
          }
        },
        {
          text: 'Compartilhar',
          icon: 'share',
          handler: () => {
            console.log('Comparilhar');
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role : 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        }
      ]
    });

    await actionSheet.present();
  }
}
