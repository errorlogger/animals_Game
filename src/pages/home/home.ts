import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { AnimalsProvider } from '../../providers/animals/animals';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public animals;
  private currentAnimal;
  public result: string;
  public showReorder = false;

  constructor(public navCtrl: NavController, 
              public toastCtrl: ToastController, 
              public events:Events,
              public animalsProvider: AnimalsProvider) {

    events.subscribe('dataReturn', (data)=>{
      console.log(data);
      data = JSON.parse(data);
      toastCtrl.create({
        message: data.message + "--" + data.pwd,
        duration: 3000
      }).present();
      
      });
       this.animals = animalsProvider.animals;
  }
/**
 * choix aléatoire d'un animal
 * retourne l'animal sélectionné (objet)
 */
  pickAnimal(){
    let pos;
    let animal;
    if(!this.currentAnimal){
      pos = Math.floor(Math.random()*this.animals.length);
      animal = this.animals[pos];
    }else{
      animal = this.currentAnimal;
    }
    return animal;
  }

  playSound(){
    //choix d'un son
    this.currentAnimal = this.pickAnimal();
    //instanciation objet audio
    let audio = new Audio();
    //chemin du son
    audio.src = 'assets' + this.currentAnimal.file;
    //chargement
    audio.load;

    audio.play();
  }

  /**
   * teste la validité de la réponse
   */
  guess(animalName){
    if(this.currentAnimal != null){
      if (animalName == this.currentAnimal.title){
        this.result="Bravo! Tu as gagné!!!";
        this.toastCtrl.create({
          message:"Bravo! Tu as gagné!!!",
          duration:3000,
          position: 'top',
          cssClass: 'toastCss'
        }).present();
        this.currentAnimal = null;
      }else{
        this.result="Oups! Essaie encore!!";
        this.toastCtrl.create({
          message:"Oups! Essaie encore!!",
          duration:3000,
          position: 'top',
          cssClass: 'toastCss'
        }).present();
      }
    }else{
      this.result = "veuillez faire votre choix"
    }
  }
/**
 * activation de l'option reorder dans la bar de nav
 */
  activeReorder(){
    this.showReorder=!this.showReorder;
  }
 
  /**
   * permet la navigation vers une autre page
   */
  goToDetails(animal){
    this.navCtrl.push(DetailsPage, {data:animal});
  }

  ionVi
}


