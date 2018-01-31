import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { HomePage } from '../home/home';


/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  public animal;
  public inputMessage:string;
  public inputPwd:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events:Events) {
    this.animal = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  
  validation(){
    console.log(this.inputMessage);
    let data = {
      message:this.inputMessage,
      pwd: this.inputPwd
    }
    this.events.publish('dataReturn',JSON.stringify(data));
    this.navCtrl.pop();
  }
}
