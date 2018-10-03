import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { CsPage } from '../cs/cs';
import { ComunicacionPage } from '../comunicacion/comunicacion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
historia = HistoriaPage;
ciencias= CsPage;
comunicacion = ComunicacionPage;
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
}
