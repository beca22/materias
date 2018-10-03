import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { CsPage } from '../cs/cs';
import { ComunicacionPage } from '../comunicacion/comunicacion';
import { DibujoPage } from '../dibujo/dibujo';
import { PAppsPage } from '../p-apps/p-apps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
historia = HistoriaPage;
ciencias= CsPage;
comunicacion = ComunicacionPage;
dibujo = DibujoPage;
papps = PAppsPage;
  constructor(public navCtrl: NavController) {

  }
clickHistoria(){
this.navCtrl.push(this.historia);
}
clickCS(){
  this.navCtrl.push(this.ciencias);
}
clickCom(){
  this.navCtrl.push(this.comunicacion);
}
clickDib(){
  this.navCtrl.push(this.dibujo)
}
clickPapps(){
  this.navCtrl.push(this.papps);
}
}
